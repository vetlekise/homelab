{{- $groups := slice -}}
{{- range site.Pages -}}
  {{- if and .IsSection (not .File) -}}
    {{- $groups = $groups | append .RelPermalink -}}
  {{- end -}}
{{- end -}}

document.addEventListener("DOMContentLoaded", function () {
  // Hugo creates section pages without content files; use them only as sidebar groups.
  const groups = new Set({{ $groups | jsonify | safeJS }});
  document.querySelectorAll(".hextra-sidebar-item > a").forEach(function (link) {
    if (!groups.has(link.getAttribute("href"))) return;

    const item = link.parentElement;
    const button = item.querySelector(".hextra-sidebar-collapsible-button");
    const children = item.parentElement.querySelector(":scope > .hextra-sidebar-children");
    if (!button || !children) {
      const label = document.createElement("span");
      label.className = link.className;
      label.append(...link.childNodes);
      link.replaceWith(label);
      if (button) button.remove();
      return;
    }

    // Keep the original button so Hextra owns toggling and aria-expanded updates.
    button.className = link.className + " hextra-sidebar-collapsible-button hextra-sidebar-group";
    button.removeAttribute("aria-label");
    button.prepend(...link.childNodes);
    link.remove();
  });
});
