new Vue({
    el: '#calc',
    data: {
      expression: '',
      result: ''
    },
    methods: {
        input(char) {
            this.expression += char;
        },
        AC() {
            this.expression = '';
            this.result = ''; 
        },
        deleteOne() {
            if (this.expression.length > 0) {
                this.expression = this.expression.slice(0, -1);
            }
        },
        calculate() {
            try {
                this.result = eval(this.expression);
            } 
            catch (error) {
                this.result = 'Ошибка';
            }   
        }
    }
});
  

new Vue({
    el: '#auto-table',
    data: {
        items: []
    },
    created: function() {
        fetch('table.json') 
            .then(response => response.json())
            .then(data => {
                this.items = data;
            });
    }
});