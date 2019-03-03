var iconsReplace = function(md, options, Token) {
  var arrayReplaceAt = md.utils.arrayReplaceAt;

  var icons = [
    {
      tag: 'yes',
      fill: '#33FF66',
      d:
        'M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15.4,20.3L14,21.8l-1.4-1.4v0l-4.7-4.7l1.4-1.4l4.7,4.7l8.7-8.7l1.4,1.4L15.4,20.3z'
    },
    {
      tag: 'maybe',
      fill: '#FFDC10',
      d: 'M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M23,17H9v-2h14V17z'
    },
    {
      tag: 'no',
      fill: '#F43434',
      d:
        'M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M22.7,21.3l-1.4,1.4L16,17.4l-5.3,5.3l-1.4-1.4l5.3-5.3l-5.3-5.3l1.4-1.4l5.3,5.3l5.3-5.3l1.4,1.4L17.4,16L22.7,21.3z'
    }
  ];
  var pattern = /\/icon:([a-z]+)\:*([0-9]+)*\//i;

  var createTokens = function(index, size, Token) {
    var nodes, opening, path, closing;
    nodes = [];

    opening = new Token('status_icon_opening', 'svg', 1);
    opening.attrs = [
      ['version', '1.1'],
      ['xmlns', 'http://www.w3.org/2000/svg'],
      ['viewBox', '0 0 32 32'],
      ['width', size],
      ['height', size]
    ];

    path = new Token('status_icon_path', 'path', 1);
    path.attrs = [['fill', icons[index].fill], ['d', icons[index].d]];

    closing = new Token('status_icon_closing', 'svg', -1);

    nodes.push(opening);
    nodes.push(path);
    nodes.push(closing);

    return nodes;
  };
  var splitTextToken = function(original, Token) {
    var matches, text, icon, size;
    text = original.content;
    matches = text.match(pattern);
    if (matches === null) {
      return original;
    }
    icon = matches[1];
    size = matches[2] || '24';

    let index = icons.findIndex(i => i.tag == icon);
    if (index === -1) {
      return original;
    }

    return createTokens(index, size, Token);
  };
  return function(state) {
    var blockTokens, i, j, l, token, tokens;
    blockTokens = state.tokens;
    j = 0;
    l = blockTokens.length;
    while (j < l) {
      if (blockTokens[j].type !== 'inline') {
        j++;
        continue;
      }
      tokens = blockTokens[j].children;
      i = tokens.length - 1;
      while (i >= 0) {
        token = tokens[i];
        blockTokens[j].children = tokens = arrayReplaceAt(
          tokens,
          i,
          splitTextToken(token, state.Token)
        );
        i--;
      }
      j++;
    }
  };
};

module.exports = function(md, options) {
  'use strict';
  md.core.ruler.push('rasputin-icons', iconsReplace(md, options));
};
