export default function throttle(callback, limit) {
    let wait = false;
    return function () {
        if (!wait) {
            callback.apply(this, arguments);
            wait = true;
            setTimeout(() => (wait = false), limit);
        }
    };
}