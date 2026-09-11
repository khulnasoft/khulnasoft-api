"use strict";
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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InfiniteScroll;
var React = __importStar(require("react"));
var DynamicSizeList_1 = require("./DynamicSizeList");
var react_virtualized_auto_sizer_1 = __importDefault(
  require("react-virtualized-auto-sizer")
);
function InfiniteScroll(_a) {
  var _Item = _a.Item,
    Loading = _a.Loading,
    Error = _a.Error,
    width = _a.width,
    height = _a.height,
    itemCount = _a.itemCount,
    _itemKey = _a.itemKey,
    _itemData = _a.itemData,
    useItem = _a.useItem,
    rest = __rest(_a, [
      "Item",
      "Loading",
      "Error",
      "width",
      "height",
      "itemCount",
      "itemKey",
      "itemData",
      "useItem",
    ]);
  var itemData = React.useMemo(
    function () {
      return {
        Item: _Item,
        Loading: Loading,
        Error: Error,
        useItem: useItem,
        itemData: _itemData,
      };
    },
    [_Item, Loading, Error, _itemData, useItem]
  );
  var itemKey = React.useCallback(
    function (index, data) {
      return _itemKey && data.itemData ? _itemKey(index, data.itemData) : index;
    },
    [_itemKey]
  );
  return (
    <react_virtualized_auto_sizer_1.default>
      {function (size) {
        var _a, _b;
        return (
          <DynamicSizeList_1.DynamicSizeList
            {...rest}
            itemCount={itemCount}
            height={
              (_a =
                height !== null && height !== void 0 ? height : size.height) !==
                null && _a !== void 0
                ? _a
                : 0
            }
            width={
              (_b = width !== null && width !== void 0 ? width : size.width) !==
                null && _b !== void 0
                ? _b
                : 0
            }
            itemKey={itemKey}
            itemData={itemData}
          >
            {Item}
          </DynamicSizeList_1.DynamicSizeList>
        );
      }}
    </react_virtualized_auto_sizer_1.default>
  );
}
var Item = React.forwardRef(function Row(_a, ref) {
  var index = _a.index,
    style = _a.style,
    isScrolling = _a.isScrolling,
    _b = _a.data,
    _Item = _b.Item,
    Loading = _b.Loading,
    Error = _b.Error,
    useItem = _b.useItem,
    itemData = _b.itemData;
  var item = useItem(index);
  switch (item === null || item === void 0 ? void 0 : item.status) {
    case "loaded":
      return (
        <_Item
          index={index}
          data={itemData}
          item={item.data}
          style={style}
          isScrolling={isScrolling}
          ref={ref}
        />
      );
    case "loading":
      return (
        <Loading
          index={index}
          data={itemData}
          style={style}
          isScrolling={isScrolling}
          ref={ref}
        />
      );
    case "error":
      return (
        <Error
          index={index}
          data={itemData}
          style={style}
          isScrolling={isScrolling}
          error={item.error}
          ref={ref}
        />
      );
  }
  return null;
});
