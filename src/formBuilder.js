var _ = require('underscore');

ko.components.register('app', {
    viewModel: function () {

        this.rows = ko.observableArray([
            {
                label: 'Check this',
                type: 'checkbox',
                size: 'medium'
            },
            {
                label: 'Write here',
                type: 'paragraph',
                size: 'medium'
            },
            {
                label: 'Click here',
                type: 'radio',
                size: 'medium'
            },
            {
                label: 'Select something',
                type: 'select',
                size: 'medium'
            },
            {
                label: 'Type here',
                type: 'text',
                size: 'medium'
            }
        ]);

        this.tempField = ko.observable({});

        this.save_label = function (label) {
            var newField = _.clone(this.tempField());
            newField.label = label;
            this.tempField(newField);
        }.bind(this);

        this.save_type = function (type) {
            var newField = _.clone(this.tempField());
            newField.type = type;
            this.tempField(newField);
        }.bind(this);

        this.save_size = function (size) {
            var newField = _.clone(this.tempField());
            newField.size = size;
            this.tempField(newField);
        }.bind(this);

        this.create_field = function (label, type, size) {
            if (label && type && size) {
                this.rows.push({
                    label: label,
                    type: type,
                    size: size
                });
            }
        }.bind(this);

        this.remove_field = function (item) {
            this.rows.remove(item);
        }.bind(this);

    },
    template: require('../templates/app.html')
});

ko.components.register('text-preview', {
    template: require('../templates/text-preview.html')
});
ko.components.register('checkbox-preview', {
    template: require('../templates/checkbox-preview.html')
});
ko.components.register('radio-preview', {
    template: require('../templates/radio-preview.html')
});
ko.components.register('paragraph-preview', {
    template: require('../templates/paragraph-preview.html')
});
ko.components.register('select-preview', {
    template: require('../templates/select-preview.html')
});
ko.components.register('main-widget', {
    viewModel: function() {
        this.openAddFieldModal = function() {
            $('#fieldModal').modal('show');
        };
    },
    template: require('../templates/main-widget.html')
});
ko.components.register('tr-field-info', {
    template: require('../templates/tr-field-info.html')
});
ko.components.register('row-widget', {
    template: require('../templates/row-widget.html')
});
ko.components.register('modal', {
    template: require('../templates/modal.html')
});
