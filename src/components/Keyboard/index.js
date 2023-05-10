const elements = {
    main: null,
    keysContainer: null,
    keys: []
}

const eventsHandlers = {
    oninput: null,
    onclose: null
}

const properties = {
    value: '',
    capsLock: false
}

// to change the keyboard keys
const keyType = {
    default: true,
    num: false,
    symbols: false
}

const init = () => {
    // create main element
    elements.main = document.createElement('div');
    elements.keysContainer = document.createElement('div');

    // add class
    elements.main.classList.add('keyboard', 'keyboard_hidden');
    elements.keysContainer.classList.add('keyboard_keys');
    elements.keysContainer.appendChild(_createKeys());

    elements.keys = elements.keysContainer.querySelectorAll('.keyboard_key');

    // add to dom
    elements.main.appendChild(elements.keysContainer);
    document.body.appendChild(elements.main);

    // display on text area
    document.querySelectorAll('.use_keyboard').forEach(element => {
        element.addEventListener('focus', () => {
            open(element.value, (currentValue) => {
                element.value = currentValue
            })
        })
    })

}

const _createKeys = () => {
    // create fragment
    const fragment = document.createDocumentFragment();
    // if (keyType.default) {
    //     const keyLayout = [
    //         '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace',
    //         'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    //         'caps', 'a', 's', 'd', 'f', 'g','h', 'j', 'k', 'l', 'enter',
    //         'done', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?',
    //         'space'
    //     ]
    // } else if (keyType.num) {
    //     const keyLayout = [
    //         '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace',
    //         'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    //         'caps', 'a', 's', 'd', 'f', 'g','h', 'j', 'k', 'l', 'enter',
    //         'done', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?',
    //         'space'
    //     ];
    // } else if (keyType.symbols) {
    //     const keyLayout = [
    //         '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace',
    //         'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    //         'caps', 'a', 's', 'd', 'f', 'g','h', 'j', 'k', 'l', 'enter',
    //         'done', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?',
    //         'space'
    //     ];
    // }

    const keyLayout = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace',
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
        'caps', 'a', 's', 'd', 'f', 'g','h', 'j', 'k', 'l', 'enter',
        'done', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?',
        'space'
    ];

    // create html for icons
    const createIconHtml = (iconName) => {
        return `<i class="material-icons">${iconName}</i>`;
    };

    keyLayout.forEach(key => {
        const keyElement = document.createElement('button');
        const insertBreak = ['backspace', 'p', 'enter', '?'].indexOf(key) !== -1;

        keyElement.setAttribute('type', 'button');
        keyElement.classList.add('keyboard_key');

        if (key === 'backspace') {
            keyElement.classList.add('keyboard_key_wide');
            keyElement.innerHTML = createIconHtml('backspace');

            keyElement.addEventListener('click', () => {
                properties.value = properties.value.substring(0, properties.value.length - 1);
                _triggerEvents('oninput')
            })
        } else if (key === 'caps') {
            keyElement.classList.add('keyboard_key_wide', 'keyboard_key_activatable');
            keyElement.innerHTML = (createIconHtml('keyboard_capslock'));

            keyElement.addEventListener('click', () => {
                _toggleCapslock()
                keyElement.classList.toggle('keyboard_key_active', properties.capsLock)
            })
        } else if (key === 'enter') {
            keyElement.classList.add('keyboard_key_wide');
            keyElement.innerHTML = (createIconHtml('keyboard_return'));

            keyElement.addEventListener('click', () => {
                properties.value += '\n';
                _triggerEvents('oninput')
            })
        } else if (key === 'space') {
            keyElement.classList.add('keyboard_key_extrawide');
            keyElement.innerHTML = (createIconHtml('space_bar'));
            
            keyElement.addEventListener('click', () => {
                properties.value += ' ';
                _triggerEvents('oninput')
            })
        } else if (key === 'done') {
            keyElement.classList.add('keyboard_key_wide', 'keyboard_key_dark');
            keyElement.innerHTML = (createIconHtml('check_circle'));
            
            keyElement.addEventListener('click', () => {
                close()
                _triggerEvents('onclose')
            })
        } else {
            keyElement.textContent = key.toLowerCase()

            keyElement.addEventListener('click', () => {
                properties.value += properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                _triggerEvents('oninput')
            })
        }

        fragment.appendChild(keyElement);
    
        if(insertBreak) {
            fragment.appendChild(document.createElement('br'))
        }
    })

    return fragment

}

const _triggerEvents = (handlerName) => {
    if (typeof eventsHandlers[handlerName] === "function") {
        eventsHandlers[handlerName](properties.value)
    }
}

const _toggleCapslock = () => {
    properties.capsLock = !properties.capsLock
    for (const key of elements.keys) {
        if (key.childElementCount === 0) {
            key.textContent = properties.capsLock ? key.textContent.toUpperCase()  : key.textContent.toLowerCase();
        }
    }
}

const open = (initialValue, oninput, onclose) => {
    properties.value = initialValue || '';
    eventsHandlers.oninput = oninput
    eventsHandlers.onclose = onclose;
    elements.main.classList.remove('keyboard_hidden')
}

const close = () => {
    properties.value = '';
    elements.main.classList.add('keyboard_hidden')
}

window.addEventListener('DOMContentLoaded', () => {
    init();
})