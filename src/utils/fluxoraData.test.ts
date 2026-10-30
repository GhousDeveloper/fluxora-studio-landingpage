import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateInquiry,
  HERO_STATS,
  FLUXORA_FEATURES,
  HERO_BG_VIDEO_URL,
} from './fluxoraData';

test('validateInquiry rejects empty fields', () => {
  const result = validateInquiry({ name: '', email: '', projectScope: '' });
  assert.equal(result.valid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.projectScope);
});

test('validateInquiry rejects malformed email', () => {
  const result = validateInquiry({
    name: 'Elena Vance',
    email: 'elena-at-fluxora',
    projectScope: 'Design System',
  });
  assert.equal(result.valid, false);
  assert.equal(result.errors.email, 'Please enter a valid email address.');
});

test('validateInquiry accepts valid inquiry payload', () => {
  const result = validateInquiry({
    name: 'Elena Vance',
    email: 'elena@fluxora.studio',
    projectScope: 'AI Product Experience',
  });
  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, {});
});

test('HERO_STATS contains exact reference metrics 150+ and 98%', () => {
  assert.equal(HERO_STATS.length, 2);
  assert.equal(HERO_STATS[0].value, '150+');
  assert.equal(HERO_STATS[0].label, 'Projects delivered');
  assert.equal(HERO_STATS[1].value, '98%');
  assert.equal(HERO_STATS[1].label, 'Client satisfaction*');
});

test('FLUXORA_FEATURES exposes 3 core studio capabilities', () => {
  assert.equal(FLUXORA_FEATURES.length, 3);
});

test('HERO_BG_VIDEO_URL matches the requested Cloudinary robot eye glow animation MP4', () => {
  assert.equal(
    HERO_BG_VIDEO_URL,
    'https://res.cloudinary.com/ti5wugi7/video/upload/v1793101880/Robot_eye_glow_animation_1080p_20261027162008.mp4'
  );
});
