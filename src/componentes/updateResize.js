export const updateResize = (textRef, direction) => {

    if (window.innerWidth <= 800) {
        textRef.current.style[direction] = "50%";
    } else {
        textRef.current.style[direction] = "0%";
    }

    window.addEventListener("resize", function () {
        let moverText = window.innerWidth <= 800;

        if (moverText) {
            textRef.current.style[direction] = "50%";
        } else {
            textRef.current.style[direction] = "0%";
        }
    });
}