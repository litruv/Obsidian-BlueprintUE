var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MyPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var MyPlugin = class extends import_obsidian.Plugin {
  async onload() {
    this.registerMarkdownPostProcessor((el, ctx) => {
      el.querySelectorAll("*").forEach((node) => {
        if (node.childNodes && node.childNodes.length) {
          node.childNodes.forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
              const text = child.nodeValue;
              const regex = /\[bpue (https:\/\/blueprintue\.com\/blueprint\/([\w\d]+)\/)\]/;
              const match = text == null ? void 0 : text.match(regex);
              if (match && match[2]) {
                const iframe = document.createElement("iframe");
                const cssParams = encodeURIComponent(".bue-render .frame {height:100% !important;margin:0;padding:0;overflow:hidden}");
                iframe.src = `https://blueprintue.com/render/${match[2]}/?noanim=1&embed=true&css=${cssParams}`;
                iframe.height = "643";
                iframe.style.width = "100%";
                iframe.style.minHeight = "643px";
                iframe.style.display = "block";
                iframe.setAttribute("allowfullscreen", "");
                iframe.style.overflow = "hidden";
                const parent = child.parentNode;
                if (parent) {
                  parent.replaceChild(iframe, child);
                }
              }
            }
          });
        }
      });
    });
  }
  onunload() {
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgUGx1Z2luLCBNYXJrZG93blBvc3RQcm9jZXNzb3JDb250ZXh0IH0gZnJvbSAnb2JzaWRpYW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xyXG5cdGFzeW5jIG9ubG9hZCgpIHtcclxuXHRcdHRoaXMucmVnaXN0ZXJNYXJrZG93blBvc3RQcm9jZXNzb3IoKGVsLCBjdHg6IE1hcmtkb3duUG9zdFByb2Nlc3NvckNvbnRleHQpID0+IHtcclxuXHRcdFx0ZWwucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2gobm9kZSA9PiB7XHJcblx0XHRcdFx0aWYgKG5vZGUuY2hpbGROb2RlcyAmJiBub2RlLmNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRub2RlLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0ID0gY2hpbGQubm9kZVZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHJlZ2V4ID0gL1xcW2JwdWUgKGh0dHBzOlxcL1xcL2JsdWVwcmludHVlXFwuY29tXFwvYmx1ZXByaW50XFwvKFtcXHdcXGRdKylcXC8pXFxdLztcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBtYXRjaCA9IHRleHQ/Lm1hdGNoKHJlZ2V4KTtcclxuXHRcdFx0XHRcdFx0XHRpZiAobWF0Y2ggJiYgbWF0Y2hbMl0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgY3NzUGFyYW1zID0gZW5jb2RlVVJJQ29tcG9uZW50KCcuYnVlLXJlbmRlciAuZnJhbWUge2hlaWdodDoxMDAlICFpbXBvcnRhbnQ7bWFyZ2luOjA7cGFkZGluZzowO292ZXJmbG93OmhpZGRlbn0nKTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmcmFtZS5zcmMgPSBgaHR0cHM6Ly9ibHVlcHJpbnR1ZS5jb20vcmVuZGVyLyR7bWF0Y2hbMl19Lz9ub2FuaW09MSZlbWJlZD10cnVlJmNzcz0ke2Nzc1BhcmFtc31gO1xyXG5cdFx0XHRcdFx0XHRcdFx0aWZyYW1lLmhlaWdodCA9ICc2NDMnO1xyXG5cdFx0XHRcdFx0XHRcdFx0aWZyYW1lLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG5cdFx0XHRcdFx0XHRcdFx0aWZyYW1lLnN0eWxlLm1pbkhlaWdodCA9ICc2NDNweCc7XHJcblx0XHRcdFx0XHRcdFx0XHRpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHRcdFx0XHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvd2Z1bGxzY3JlZW4nLCAnJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRpZnJhbWUuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHBhcmVudCA9IGNoaWxkLnBhcmVudE5vZGU7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAocGFyZW50KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQoaWZyYW1lLCBjaGlsZCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvbnVubG9hZCgpIHtcclxuXHR9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFxRDtBQUVyRCxJQUFxQixXQUFyQixjQUFzQyx1QkFBTztBQUFBLEVBQzVDLE1BQU0sU0FBUztBQUNkLFNBQUssOEJBQThCLENBQUMsSUFBSSxRQUFzQztBQUM3RSxTQUFHLGlCQUFpQixHQUFHLEVBQUUsUUFBUSxVQUFRO0FBQ3hDLFlBQUksS0FBSyxjQUFjLEtBQUssV0FBVyxRQUFRO0FBQzlDLGVBQUssV0FBVyxRQUFRLFdBQVM7QUFDaEMsZ0JBQUksTUFBTSxhQUFhLEtBQUssV0FBVztBQUN0QyxvQkFBTSxPQUFPLE1BQU07QUFDbkIsb0JBQU0sUUFBUTtBQUNkLG9CQUFNLFFBQVEsNkJBQU0sTUFBTTtBQUMxQixrQkFBSSxTQUFTLE1BQU0sQ0FBQyxHQUFHO0FBQ3RCLHNCQUFNLFNBQVMsU0FBUyxjQUFjLFFBQVE7QUFDOUMsc0JBQU0sWUFBWSxtQkFBbUIsZ0ZBQWdGO0FBQ3JILHVCQUFPLE1BQU0sa0NBQWtDLE1BQU0sQ0FBQyw4QkFBOEI7QUFDcEYsdUJBQU8sU0FBUztBQUNoQix1QkFBTyxNQUFNLFFBQVE7QUFDckIsdUJBQU8sTUFBTSxZQUFZO0FBQ3pCLHVCQUFPLE1BQU0sVUFBVTtBQUN2Qix1QkFBTyxhQUFhLG1CQUFtQixFQUFFO0FBQ3pDLHVCQUFPLE1BQU0sV0FBVztBQUN4QixzQkFBTSxTQUFTLE1BQU07QUFDckIsb0JBQUksUUFBUTtBQUNYLHlCQUFPLGFBQWEsUUFBUSxLQUFLO0FBQUEsZ0JBQ2xDO0FBQUEsY0FDRDtBQUFBLFlBQ0Q7QUFBQSxVQUNELENBQUM7QUFBQSxRQUNGO0FBQUEsTUFDRCxDQUFDO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDRjtBQUFBLEVBRUEsV0FBVztBQUFBLEVBQ1g7QUFDRDsiLAogICJuYW1lcyI6IFtdCn0K
