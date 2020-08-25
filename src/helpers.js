// import T from 'prop-types';

export const GLOBAL_ATTRS = ['id', 'display', 'responsive', 'as', 'theme', 'prop', 'width', 'height', 'sizing', 'radius', 'padding', 'overflow', 'space', 'border', 'shadow', 'flow', 'gap', 'order', 'flex', 'grow', 'shrink', 'basis', 'place-content', 'place-items', 'content', 'items', 'template-areas', 'areas', 'auto-flow', 'template-columns', 'template-rows', 'columns', 'rows', 'column', 'row', 'area', 'contain', 'place', 'z', 'interactive', 'color', 'fill', 'filter', 'backdrop', 'image', 'transform', 'scale', 'rotate', 'move', 'text', 'cursor', 'size', 'hide', 'show', 'opacity', 'transition', 'scrollbar', 'before', 'after', 'inset', 'outline', 'mark', 'expand', 'fade', 'drop', 'origin', 'selectable', 'box', 'line-clamp', 'snap', 'snapping', 'role', 'direction', 'control', 'checkbox', 'trigger', 'hidden', 'label', 'level', 'labelledby', 'describedby', 'valuemin', 'valuemax', 'valuenow', 'setsize', 'posinset', 'expanded', 'owns', 'flowto', 'haspopup', 'activedescendant', 't', 'type', 'precision', 'disabled', 'link-value', 'value', 'off-value', 'scrollto', 'action', 'lang', 'special', 'placeholder', 'min', 'max', 'step', 'code', 'sign', 'unit', 'notation', 'fallback', 'significant', 'integer', 'decimal', 'pressed', 'checked', 'selected', 'target', 'to', 'begin', 'end', 'for', 'assert', 'enumerate', 'date', 'time', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'zone', 'timezone', 'dayperiod', 'calendar', 'system', 'hourcycle', 'format', 'src', 'autofocus', 'maxlength', 'mode', 'mask', 'list', 'typographer', 'linkify', 'clip', 'font'];

// export const GLOBAL_PROPS_TYPES = GLOBAL_ATTRS.reduce((map, attr) => {
//   map[attr] = T.string;
//
//   return map;
// }, {});

export function attrs(props, ignore = []) {
  return GLOBAL_ATTRS.reduce((map, attr) => {
    if (props[attr] != null && !ignore.includes(attr)) {
      map[attr] = props[attr];
    }

    return map;
  }, {});
}

export function insertHTML(html = '') {
  return {
    dangerouslySetInnerHTML: {
      __html: `<nu-block>${html
        .replace(/\\n\\n/g, '</nu-block><nu-block>')
        .replace(/\\n/g, '<br/>')}</nu-block>`
        .replace(/-/g, '&#8209;'),
    },
  };
}

/** @copyright https://github.com/feross/clipboard-copy/blob/master/index.js */
export function copyToClipboard(text) {
  // Use the Async Clipboard API when available. Requires a secure browsing
  // context (i.e. HTTPS)
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text).catch(function (err) {
      throw (err !== undefined ? err : new DOMException('The request is not allowed', 'NotAllowedError'))
    })
  }

  // ...Otherwise, use document.execCommand() fallback

  // Put the text to copy into a <span>
  const span = document.createElement('span')
  span.textContent = text

  // Preserve consecutive spaces and newlines
  span.style.whiteSpace = 'pre'

  // Add the <span> to the page
  document.body.appendChild(span)

  // Make a selection object representing the range of text selected by the user
  const selection = window.getSelection()
  const range = window.document.createRange()
  selection.removeAllRanges()
  range.selectNode(span)
  selection.addRange(range)

  // Copy text to the clipboard
  let success = false
  try {
    success = window.document.execCommand('copy')
  } catch (err) {
    console.log('error', err)
  }

  // Cleanup
  selection.removeAllRanges()
  window.document.body.removeChild(span)

  return success
    ? Promise.resolve()
    : Promise.reject(new DOMException('The request is not allowed', 'NotAllowedError'))
}
