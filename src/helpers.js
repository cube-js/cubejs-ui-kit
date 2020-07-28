const GLOBAL_ATTRS = ['id', 'display', 'responsive', 'as', 'theme', 'prop', 'width', 'height', 'sizing', 'radius', 'padding', 'overflow', 'space', 'border', 'shadow', 'flow', 'gap', 'order', 'flex', 'grow', 'shrink', 'basis', 'place-content', 'place-items', 'content', 'items', 'template-areas', 'areas', 'auto-flow', 'template-columns', 'template-rows', 'columns', 'rows', 'column', 'row', 'area', 'contain', 'place', 'z', 'interactive', 'color', 'fill', 'filter', 'backdrop', 'image', 'transform', 'scale', 'rotate', 'move', 'text', 'cursor', 'size', 'hide', 'show', 'opacity', 'transition', 'scrollbar', 'before', 'after', 'inset', 'outline', 'mark', 'expand', 'fade', 'drop', 'origin', 'selectable', 'box', 'line-clamp', 'snap', 'snapping', 'role', 'direction', 'control', 'checkbox', 'trigger', 'hidden', 'label', 'level', 'labelledby', 'describedby', 'valuemin', 'valuemax', 'valuenow', 'setsize', 'posinset', 'expanded', 'owns', 'flowto', 'haspopup', 'activedescendant', 't', 'type', 'precision', 'disabled', 'link-value', 'value', 'off-value', 'scrollto', 'action', 'lang', 'special', 'placeholder', 'min', 'max', 'step', 'code', 'sign', 'unit', 'notation', 'fallback', 'significant', 'integer', 'decimal', 'pressed', 'checked', 'selected', 'target', 'to', 'begin', 'end', 'for', 'assert', 'enumerate', 'date', 'time', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'zone', 'timezone', 'dayperiod', 'calendar', 'system', 'hourcycle', 'format', 'src', 'autofocus', 'maxlength', 'mode', 'mask', 'list', 'typographer', 'linkify'];

export function filterAttrs(props, ignore = []) {
  return GLOBAL_ATTRS.reduce((map, attr) => {
    if (attr in props && !ignore.includes(attr)) {
      map[attr] = props[attr];
    }

    return map;
  }, {});
}

export function insertHTML(html = '') {
  return {
    dangerouslySetInnerHTML: {
      __html: html.replace(/\\n/g, '<br/>'),
    },
  };
}
