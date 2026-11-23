#!/usr/bin/env bash
# Baixa as fotos de banco de imagem listadas em src/config/images.ts para
# public/images/fotos/, em 3 larguras, para o site não depender do CDN
# do Unsplash/Pexels ao carregar.
#
# Uso: bash scripts/baixar-fotos.sh
# Só baixa o que ainda não existe. Rode de novo ao adicionar uma foto.
set -uo pipefail

cd "$(dirname "$0")/.."
CONFIG=src/config/images.ts
OUT=public/images/fotos
WIDTHS=(640 1080 1440)
mkdir -p "$OUT"

fetch() { # url destino
  local url=$1 dest=$2 tmp
  [[ -s $dest ]] && return 0
  tmp="$dest.part"
  for attempt in 1 2 3 4 5; do
    if curl -sfL --max-time 45 -A 'Mozilla/5.0' -o "$tmp" "$url" && [[ -s $tmp ]]; then
      mv "$tmp" "$dest"
      echo "ok    $dest"
      return 0
    fi
    sleep $((attempt * 2))
  done
  rm -f "$tmp"
  echo "FALHA $dest ($url)" >&2
  return 1
}

failed=0

for id in $(grep -o "unsplash('[^']*')" "$CONFIG" | sed "s/unsplash('\(.*\)')/\1/" | sort -u); do
  for w in "${WIDTHS[@]}"; do
    fetch "https://images.unsplash.com/photo-$id?fm=jpg&fit=max&q=75&w=$w" "$OUT/u-$id-$w.jpg" || failed=1
  done
done

for id in $(grep -o "pexels([0-9]*)" "$CONFIG" | tr -dc '0-9\n' | sort -u); do
  for w in "${WIDTHS[@]}"; do
    fetch "https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&w=$w" "$OUT/p-$id-$w.jpg" || failed=1
  done
done

exit $failed
