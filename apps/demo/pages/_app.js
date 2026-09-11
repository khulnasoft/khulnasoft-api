"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
var react_hot_toast_1 = require("react-hot-toast");
var react_1 = require("next-auth/react");
var Layout_1 = __importDefault(require("../components/Layout"));
var LoginModal_1 = __importDefault(require("../components/modals/LoginModal"));
var RegisterModal_1 = __importDefault(
  require("../components/modals/RegisterModal")
);
require("../styles/globals.css");
var EditModal_1 = __importDefault(require("../components/modals/EditModal"));
var react_query_1 = require("@tanstack/react-query");
var queryClient = new react_query_1.QueryClient();
function App(_a) {
  var Component = _a.Component,
    pageProps = _a.pageProps;
  return (
    <react_query_1.QueryClientProvider client={queryClient}>
      <react_1.SessionProvider session={pageProps.session}>
        <react_hot_toast_1.Toaster />
        <RegisterModal_1.default />
        <LoginModal_1.default />
        <EditModal_1.default />
        <Layout_1.default>
          <Component {...pageProps} />
        </Layout_1.default>
      </react_1.SessionProvider>
    </react_query_1.QueryClientProvider>
  );
}
