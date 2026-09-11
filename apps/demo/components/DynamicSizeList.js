"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  (function () {
    var ownKeys = function (o) {
      ownKeys =
        Object.getOwnPropertyNames ||
        function (o) {
          var ar = [];
          for (var k in o)
            if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
          return ar;
        };
      return ownKeys(o);
    };
    return function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null)
        for (var k = ownKeys(mod), i = 0; i < k.length; i++)
          if (k[i] !== "default") __createBinding(result, mod, k[i]);
      __setModuleDefault(result, mod);
      return result;
    };
  })();
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicSizeList = DynamicSizeList;
var React = __importStar(require("react"));
var react_window_1 = require("react-window");
var react_use_measure_1 = __importDefault(require("react-use-measure"));
function DynamicSizeList(_a) {
  var Children = _a.children,
    layout = _a.layout,
    _b = _a.minItemSize,
    minItemSize = _b === void 0 ? 0 : _b,
    itemCount = _a.itemCount,
    onTotalSizeChange = _a.onTotalSizeChange,
    props = __rest(_a, [
      "children",
      "layout",
      "minItemSize",
      "itemCount",
      "onTotalSizeChange",
    ]);
  var _c = React.useReducer(
      function (state, action) {
        switch (action.type) {
          case "clearLastIndex":
            return state.lastIndex == null
              ? state
              : __assign(__assign({}, state), { lastIndex: null });
          case "setItemSize": {
            var index = action.index,
              size = action.size;
            if (state.itemSizes[index] === size) return state;
            var itemSizes_1 = __spreadArray([], state.itemSizes, true);
            itemSizes_1[index] = size;
            return {
              itemSizes: itemSizes_1,
              lastIndex:
                state.lastIndex == null
                  ? index
                  : Math.min(state.lastIndex, index),
            };
          }
          default:
            return state;
        }
      },
      { itemSizes: [], lastIndex: null }
    ),
    state = _c[0],
    dispatch = _c[1];
  var itemSizes = state.itemSizes,
    lastIndex = state.lastIndex;
  var itemSizesRef = React.useRef(itemSizes);
  itemSizesRef.current = itemSizes;
  var itemSize = React.useCallback(
    function (index) {
      return itemSizesRef.current[index] || minItemSize || 0;
    },
    [minItemSize]
  );
  var totalSize = React.useMemo(
    function () {
      return (
        itemSizes.reduce(function (total, next) {
          return total + Math.max(next || 0, minItemSize);
        }, 0) +
        minItemSize * Math.max(0, itemCount - itemSizes.length)
      );
    },
    [itemCount, minItemSize, itemSizes]
  );
  React.useEffect(
    function () {
      onTotalSizeChange === null || onTotalSizeChange === void 0
        ? void 0
        : onTotalSizeChange(totalSize);
    },
    [totalSize, onTotalSizeChange]
  );
  var Row = React.useCallback(
    function MeasuredRow(rowProps) {
      var _a = (0, react_use_measure_1.default)(),
        ref = _a[0],
        bounds = _a[1];
      var size =
        layout === "horizontal"
          ? bounds === null || bounds === void 0
            ? void 0
            : bounds.width
          : bounds === null || bounds === void 0
          ? void 0
          : bounds.height;
      React.useEffect(
        function () {
          if (size != null && size > 0) {
            dispatch({
              type: "setItemSize",
              index: rowProps.index,
              size: size,
            });
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
        },
        [size]
      );
      return (
        <div style={rowProps.style}>
          <Children {...rowProps} style={{}} ref={ref} />
        </div>
      );
    },
    [Children, layout]
  );
  var listRef = React.useRef(null);
  var list = listRef.current;
  React.useEffect(
    function () {
      if (list && lastIndex != null) {
        list.resetAfterIndex(lastIndex);
        dispatch({ type: "clearLastIndex" });
      }
    },
    [list, lastIndex]
  );
  return (
    <react_window_1.VariableSizeList
      {...props}
      ref={listRef}
      layout={layout}
      itemSize={itemSize}
      itemCount={itemCount}
    >
      {Row}
    </react_window_1.VariableSizeList>
  );
}
