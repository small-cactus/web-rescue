import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);
const layoutUrl = new URL("../app/layout.tsx", import.meta.url);
const campaignUrl = new URL("../CAMPAIGN_COPY.md", import.meta.url);
const playbookUrl = new URL("../PERSONALIZATION_PLAYBOOK.md", import.meta.url);

test("presents the truthful rescue offer and primary trust links", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.match(page, /full-time software engineer/i);
  assert.match(page, /\$600/);
  assert.match(page, /48-hour/i);
  assert.match(page, /seven-day regression warranty/i);
  assert.match(page, /linkedin\.com\/in\/anthony-hayward/i);
  assert.match(page, /www\.anthony-hayward\.com/);
  assert.match(page, /github\.com\/small-cactus/);
});

test("does not use fragmented or fabricated proof", async () => {
  const [page, layout] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(layoutUrl, "utf8"),
  ]);

  assert.doesNotMatch(page, /Attendify|Whiskers|Fuel-Up/);
  assert.doesNotMatch(page, /Three sprint slots/i);
  assert.match(layout, /Anthony Hayward/);
});

test("keeps the intake flow client-side and explicit", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.match(page, /"use client"/);
  assert.match(page, /mailto:/);
  assert.match(page, /No information is stored on this site/i);
  assert.match(page, /\$200 diagnostic/);
  assert.match(page, /\$900 extended sprint/);
});

test("keeps payment terms consistent: deposit up front, balance on acceptance", async () => {
  const [page, campaign] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(campaignUrl, "utf8"),
  ]);

  for (const text of [page, campaign]) {
    assert.match(text, /\$360 deposit/);
    assert.match(text, /accept the work/i);
    assert.doesNotMatch(text, /due on delivery/i);
  }
});

test("sendable copy stays free of marketing-bot language", async () => {
  const texts = await Promise.all(
    [pageUrl, layoutUrl, campaignUrl].map((url) => readFile(url, "utf8")),
  );
  const banned = [
    /leverag/i,
    /seamless/i,
    /bespoke/i,
    /unlock/i,
    /elevat/i,
    /game.?chang/i,
    /passionate/i,
    /tailored/i,
    /synerg/i,
    /cutting.?edge/i,
    /best.?in.?class/i,
    /hope this (email )?finds you well/i,
  ];

  for (const text of texts) {
    for (const pattern of banned) {
      assert.doesNotMatch(text, pattern);
    }
  }
});

test("cold outreach keeps compliance and stays manual", async () => {
  const campaign = await readFile(campaignUrl, "utf8");

  assert.match(campaign, /\[POSTAL ADDRESS\]/);
  assert.match(campaign, /reply "no"/i);
  assert.match(campaign, /No automation, no purchased lists/i);
  assert.doesNotMatch(campaign, /slots? (left|remaining)/i);
});

test("personalization playbook teaches the first sentence and the send checklist", async () => {
  const playbook = await readFile(playbookUrl, "utf8");

  assert.match(playbook, /three-minute|three minutes/i);
  assert.match(playbook, /checklist/i);
  assert.match(playbook, /Never fake it/i);
});
