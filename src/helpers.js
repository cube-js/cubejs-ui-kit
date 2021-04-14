// import T from 'prop-types';

export const GLOBAL_ATTRS = ['id', 'display', 'responsive', 'as', 'theme', 'prop', 'width', 'height', 'sizing', 'radius', 'group-radius', 'padding', 'overflow', 'space', 'border', 'shadow', 'flow', 'gap', 'order', 'flex', 'grow', 'shrink', 'basis', 'place-content', 'place-items', 'content', 'items', 'areas', 'columns', 'rows', 'column', 'row', 'area', 'contain', 'place', 'z', 'interactive', 'color', 'fill', 'filter', 'backdrop-filter', 'image', 'transform', 'scale', 'rotate', 'move', 'text', 'cursor', 'size', 'hide', 'show', 'opacity', 'transition', 'scrollbar', 'before', 'after', 'inset', 'outline', 'mark', 'expand', 'fade', 'drop', 'origin', 'selectable', 'box', 'line-clamp', 'snap', 'snapping', 'font', 'clip', 'role', 'direction', 'control', 'checkbox', 'trigger', 'hidden', 'label', 'level', 'labelledby', 'describedby', 'valuemin', 'valuemax', 'valuenow', 'setsize', 'posinset', 'expanded', 'owns', 'flowto', 'haspopup', 'activedescendant', 't', 'use-focus', 'use-hover', 'use-listbox', 'use-option', 'use-active', 'use-fixate', 'use-orient', 'use-popup', 'use-control', 'use-radiogroup', 'use-action', 'use-label', 'use-code', 'use-markdown', 'use-datetime', 'use-number', 'use-slider', 'use-slider2d', 'use-numinput', 'use-input', 'use-textarea', 'use-fileinput', 'use-icon', 'use-svg', 'use-image', 'use-debug', 'use-debugger', 'use-form', 'use-validator', 'use-group', 'use-tooltip', 'use-progressbar', 'use-value', 'use-datepicker', 'use-dateinput', 'use-inputgroup', 'use-menu', 'use-menuitem', 'use-offset', 'use-appear', 'use-hotkey', 'use-current', 'type', 'precision', 'disabled', 'link-value', 'value', 'off-value', 'scrollto', 'action', 'lang', 'special', 'placeholder', 'min', 'max', 'step', 'code', 'sign', 'unit', 'notation', 'fallback', 'significant', 'integer', 'decimal', 'pressed', 'checked', 'selected', 'target', 'to', 'begin', 'end', 'for', 'assert', 'enumerate', 'date', 'time', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'zone', 'timezone', 'dayperiod', 'calendar', 'system', 'hourcycle', 'grouping', 'format', 'src', 'loading', 'autofocus', 'autocomplete', 'pattern', 'maxlength', 'mode', 'mask', 'list', 'multiple', 'accept', 'typographer', 'linkify', 'success', 'danger', 'warning'];

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

export function extractText(html = '') {
  return html
    .replace(/\\s[\s]*/g, ' ')
    .replace(/\\n\\n/g, ' ')
    .replace(/\\n[\s]*/g, ' ');
}

export function insertText(html = '') {
  const multiline = !!html.match(/\\n\\n/);

  return {
    dangerouslySetInnerHTML: {
      __html: `${multiline ? '<nu-block>' : ''}${html
        .replace(/[-‑]/g, '&#8209;')
        .replace(/\\s[\s]*/g, '&nbsp;')
        .replace(/\\n\\n/g, '</nu-block><nu-block>')
        .replace(/\\n[\s]*/g, '<br/>')}${multiline ? '</nu-block>' : ''}`,
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

export function JsxInnerText(children, counter = 0) {
  if (typeof children === 'object' && !Array.isArray(children)) {
    return JsxInnerText(children.props.children);
  }

  if (!children || typeof children === 'string') return children || '';

  return children.reduce((str, obj) => {
    return str + ' ' + JsxInnerText(obj);
  }, '').trim();
}
