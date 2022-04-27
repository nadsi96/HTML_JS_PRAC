var dragEventSetter = {
    setDragReorderEvent: function(listClassName) {
        $(`.${listClassName}`).children().map((idx, item) => {dragEventSetter._setDragReorderEvent(item)});
    },
     
    _setDragReorderEvent: function(item) {
        function dragStart(e){
            let point = document.elementFromPoint(e.clientX, e.clientY);

            // dragger를 잡고 움직이는 경우만 ㅇㅈ
            if(!$(point).hasClass('dragger')){
                e.preventDefault();
                return;
            }
            else{
                this.addEventListener('drag', onDrag);
                this.addEventListener('dragend', dragEnd);
                this.classList.add('dragging');
            }
        }
        function onDrag(e){
            let selectedItem = this;
            let lst = selectedItem.parentNode;
            let x = e.clientX;
            let y = e.clientY;
            
            let point = document.elementFromPoint(x, y);
            
            let swapItem = point != null ? $(point).parents('.listItem')[0] : selectedItem;
            if(swapItem && lst == swapItem.parentNode){
                // swapItem == undefined ==> 영역 밖으로 드래그한 경우
                
                if(swapItem == selectedItem.nextSibling){
                    // 아래로 드래그
                    swapItem = swapItem.nextSibling;
                }
                else{
                    // 위로 드래그
                }
                lst.insertBefore(selectedItem, swapItem); // swapItem 앞에 selectedItem 넣
            }
        }
        function dragEnd(e){
            e.stopPropagation();
            console.log('dragEnd');
            this.removeEventListener('drag', onDrag);
            this.removeEventListener('dragend', dragEnd);
            this.classList.remove('dragging');
        }
        
        item.setAttribute('draggable', true);
        item.addEventListener('dragstart', dragStart);
    },
}