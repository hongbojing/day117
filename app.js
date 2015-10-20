new Vue({
    el: '#repeat-object',
    data: {
        primitiveValues: {
            FirstName: 'John',
            LastName: 'Doe',
            Age: 30
        },
        objectValues: {
            one: {
                msg: 'Hello'
            },
            two: {
                msg: 'Bye'
            }
        }
    }
});

new Vue({
    el: '#range',
    data: {
        val: 3
    }
});