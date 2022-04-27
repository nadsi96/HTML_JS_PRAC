function onLoad(){
    let dataSet = [];
    let $itemArea = $('#itemArea');

    for(let idx = 0; idx < 10; idx++){
        let $clone = $('#copy_listItem').clone(true);
        $clone.attr('id', '');
        $clone.find('.title').text('item_' + idx);

        $itemArea.append($clone);
    }

    dragEventSetter.setDragReorderEvent('_itemArea');
}