#!/usr/bin/env bash
# Generate all images for thesprayfoaminsuranceguy.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/thesprayfoaminsuranceguy.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — SPRAY FOAM insurance ===

gen "hero.jpg" \
  "Photorealistic energetic wide shot of a confident spray foam insurance specialist expert in business casual, orange accent clothing, genuine smile, modern urban background, bold personal brand photography, no text" 4

gen "coverage.jpg" \
  "Photorealistic bold energetic photo of spray foam contractor getting coverage on phone at jobsite, orange safety equipment, energetic natural lighting, no text" 4

gen "about.jpg" \
  "Photorealistic warm confident portrait of Josh Cotner spray foam insurance expert, casual professional attire, orange accent, genuine approachable expression, warm natural light, personal brand photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide bold personal brand photo of spray foam insurance expert with orange branding elements, energetic modern photography, no text" 4 1216 640

gen "general-liability.jpg" \
  "Photorealistic bold energetic photo of spray foam contractor at work, orange foam application visible, professional action photography, no text" 4

gen "off-ratio-coverage.jpg" \
  "Photorealistic bold close-up of spray foam proportioner gauges, orange accent colors, energetic industrial photography, no text" 4

gen "contractor-pollution-liability.jpg" \
  "Photorealistic bold photo of spray foam applicator in PPE, orange accents, energetic professional photography, no text" 4

gen "workers-compensation.jpg" \
  "Photorealistic energetic photo of spray foam crew in orange safety gear working on commercial project, bold professional photography, no text" 4

gen "commercial-auto.jpg" \
  "Photorealistic bold photo of spray foam contractor truck with orange branding elements, energetic commercial vehicle photography, no text" 4

gen "tools-equipment.jpg" \
  "Photorealistic bold energetic photo of spray foam equipment with orange accent colors, professional industrial photography, no text" 4

gen "umbrella.jpg" \
  "Photorealistic bold modern photo of confident spray foam insurance expert at clean desk reviewing coverage options, orange accents in office, no text" 4

gen "bonds.jpg" \
  "Photorealistic energetic handshake and contract signing between spray foam contractor and insurance advisor, bold professional setting, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
