// 손 놓은 위치에서 원래 위치로 튕김

// dragger - 드래그할 elem
// dir - 드래그 방향 (left, right, top, bottom)
var dragAnimationSetter = {
    setEvent: function (_elem, _dir) {
        let elem = _elem, // 드래그 되는 element
            offset,  // 드래그 방향(dir) 수평: offsetLeft, 수직: offsetTop
            offsetDir, // left, top: -1, right, bottom: 1
            prePos,
            pos,
            move,
            clientXY, // 드래그 방향 수평: clientX, 수직: clientY
            returnRange, // 해당 영역 내에서 이동시 elem이 다시 원래 위치로 돌아옴
            dir = _dir, // left/right/top/bottom - 드래그할 방향
            dragging = false; // 현재 드래그 중인가

        if (dir == 'top' || dir == 'bottom') {
            offset = 'offsetTop';
            clientXY = 'clientY';
            returnRange = elem.offsetHeight * 0.8 * -1;
        }
        else if (dir == 'left' || dir == 'right') {
            offset = 'offsetLeft';
            clientXY = 'clientX';
            returnRange = elem.offsetWidth * 0.8 * -1;
        }
        else {
            console.log('error');
            return false;
        }

        offsetDir = (dir == 'left' || dir == 'top') ? -1 : 1;

        // 튕기는 애니메이션 효과 >>
        function makeEaseOut(timing) {
            return function (timeFraction) {
                return -timing(1 - timeFraction); // -1 ~ 0
            }
        }
        function bounce(timeFraction) {
            for (let a = 0, b = 1; !dragging; a += b, b /= 2) {
                if (timeFraction >= (7 - 4 * a) / 11) {
                    return (Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) - Math.pow(b, 2)) * offsetDir;
                }
            }
        }
        function animate(options) {
            let start = performance.now();

            requestAnimationFrame(function animate(time) {
                let timeFraction = (time - start) / options.duration;
                if (timeFraction > 1) {
                    timeFraction = 1;
                }

                let progress = options.timing(timeFraction);
                options.draw(progress);
                if (timeFraction < 1) {
                    requestAnimationFrame(animate);
                }
            });
        }
        // << 튕기는 애니메이션 효과


        function dragStart(e) {
            e.preventDefault();

            prePos = e[clientXY];
            dragging = true;

            this.addEventListener('mousemove', onDrag);
            this.addEventListener('mouseup', dragEnd);
        }
        function onDrag(e) {
            e.preventDefault();

            move = prePos - e[clientXY];
            pos = (-offsetDir * this[offset]) + (offsetDir * move);

            if (pos <= 0 && pos >= returnRange) {
                prePos = e[clientXY];
                this.style[dir] = pos + 'px';
            }
        }
        function dragEnd(e) {
            this.removeEventListener('mousemove', onDrag);
            this.removeEventListener('mouseup', dragEnd);

            dragging = false;

            // returnRange 범위 안이면 다시 원래대로 돌아오면서 끝에서 튕기는 애니메이션 적용
            if (returnRange < pos && pos < 0) {
                animate({
                    duration: 3000,
                    timing: makeEaseOut(bounce),
                    draw: function (progress) {
                        elem.style[dir] = progress * (offsetDir * pos) + "px";
                    }
                })
            }
        }

        elem.addEventListener('mousedown', dragStart);
    },
    clearEvent: function(elem){
        console.log('hello');
        elem.style.removeProperty('top');
        elem.style.removeProperty('bottom');
        elem.style.removeProperty('right');
        elem.style.removeProperty('left');
        elem.outerHTML = elem.outerHTML;
    }
}