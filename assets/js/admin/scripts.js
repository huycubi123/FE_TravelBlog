function loadTemplate(selector, path) { 
    fetch(path)
        .then(res => res.text())
        .then(html => document.getElementById(selector).innerHTML = html);
}

loadTemplate("header", "../../template/admin/header.html");
loadTemplate("sidebar", "../../template/admin/sidebar.html");