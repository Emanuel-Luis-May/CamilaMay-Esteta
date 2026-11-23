#!/usr/bin/env bash
# Baixa as fotos de banco de imagem usadas no index.html para images/fotos/,
# em 3 larguras, para o site não depender do CDN do Unsplash/Pexels ao carregar.
#
# Os arquivos seguem o padrão do index.html:
#   Unsplash: images/fotos/u-<id da foto>-<largura>.jpg
#   Pexels:   images/fotos/p-<número da foto>-<largura>.jpg
# Basta escrever o <img> com esses caminhos (veja o README) e rodar:
#
# Uso: bash scripts/baixar-fotos.sh
# Só baixa o que ainda não existe. Rode de novo ao adicionar uma foto.
set -uo pipefail

cd "$(dirname "$0")/.."
PAGE=index.html
OUT=images/fotos
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

for id in $(grep -oE "images/fotos/u-[A-Za-z0-9_-]+-(640|1080|1440)\.jpg" "$PAGE" | sed -E 's#images/fotos/u-(.*)-[0-9]+\.jpg#\1#' | sort -u); do
  for w in "${WIDTHS[@]}"; do
    fetch "https://images.unsplash.com/photo-$id?fm=jpg&fit=max&q=75&w=$w" "$OUT/u-$id-$w.jpg" || failed=1
  done
done

for id in $(grep -oE "images/fotos/p-[0-9]+-(640|1080|1440)\.jpg" "$PAGE" | sed -E 's#images/fotos/p-([0-9]+)-[0-9]+\.jpg#\1#' | sort -u); do
  for w in "${WIDTHS[@]}"; do
    fetch "https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&w=$w" "$OUT/p-$id-$w.jpg" || failed=1
  done
done

exit $failed
