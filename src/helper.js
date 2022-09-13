export function firstTimeStarted() {
    window.location.href = "/tutorial";
    document.cookie = "visited=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    document.cookie = "now=true";
}

export function getCookie(name) {
    let cookies = document.cookie.split("; ");
    if (cookies === undefined) {
        return "undefined";
    }
    for (let i = 0; i < cookies.length; i++) {
        cookies[i] = cookies[i].split("=");
        if (cookies[i][0] === name) {
            console.log(cookies[i]);
            return cookies[i];
        }
    }
}

export function checkVisited() {
    let visited = false;
    let visitedCookie = getCookie("visited");
    if (visitedCookie === undefined) {
        visited = false;
    } else {
        if (visitedCookie[1] === "true") {
            visited = true;
        } else {
            visited = false;
        }
    }

    if (visited) {
        window.location.href = "/app";
    }
}

export function checkNow() {
    let nowCookie = getCookie("now");
    if (nowCookie === undefined) {
        return false;
    } else if (nowCookie[1] === "true") {
        return true;
    } else {
        return false;
    }
}

export function deleteCookie(name) {
    if (getCookie(name)) {
        document.cookie = name + "=; max-age=-1";
    }
}
