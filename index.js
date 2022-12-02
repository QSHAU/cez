document.addEventListener('DOMContentLoaded', function() {
    let rangeSlider = document.querySelectorAll('.range-slider')
    
    rangeSlider.forEach(slider => {
        if (slider) {
            noUiSlider.create(slider, {
                start: [23, 999999],
                connect: true,
                step: 1,
                range: {
                    'min': [0],
                    'max': [999999]
                }
            });
    
            const input0 = slider.parentElement.querySelectorAll('input')[0];
            const input1 = slider.parentElement.querySelectorAll('input')[1];
            const inputs = [input0, input1];
    
            slider.noUiSlider.on('update', function (values, handle) {
                inputs[handle].value = Math.round(values[handle]);
            });
    
            const setRangeSlider = (i, value) => {
                let arr = [null, null];
                arr[i] = value;
    
                console.log(arr);
    
                rangeSlider.noUiSlider.set(arr);
            };
    
            inputs.forEach((el, index) => {
                el.addEventListener('change', (e) => {
                    console.log(index);
                    setRangeSlider(index, e.currentTarget.value);
                });
            });
        }
    })
    
    
    
    let filtersButton = document.querySelector('.filters-button'),
        filters = document.querySelector('.content-header')
    
    filtersButton.addEventListener('click', e => {
        e.preventDefault
        filters.classList.toggle('deactivate')
    })
    
    window.addEventListener('resize', e => {
        if (window.innerWidth > 991.98 && filters.classList.contains('deactivate')) {
            filters.classList.remove('deactivate')
        }
    })
    
    let btnShowMore = document.querySelectorAll('.participants__item-more')
    
    if (btnShowMore) {
        btnShowMore.forEach(btn => {
            btn.addEventListener('click', (e) => {
                target = e.target
                target.parentElement.classList.toggle('active')
                console.log('target', e.target);
            })
        })
    }

    let test = document.querySelector('.filters-inner');

    console.log(test);
});