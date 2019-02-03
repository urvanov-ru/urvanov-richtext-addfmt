( function( wp ) {
    var SupButton = function( props ) {
        return wp.element.createElement(
            wp.editor.RichTextToolbarButton, {
                icon: 'arrow-up',
                title: 'Sup',
                onClick: function() {
                    props.onChange( wp.richText.toggleFormat(
                        props.value,
                        { type: 'urvanov-richtext-addfmt/sup' }
                    ) );
                },
                isActive: props.isActive,
            }
        );
    }

    var SubButton = function( props ) {
        return wp.element.createElement(
            wp.editor.RichTextToolbarButton, {
                icon: 'arrow-down',
                title: 'Sub',
                onClick: function() {
                    props.onChange( wp.richText.toggleFormat(
                        props.value,
                        { type: 'urvanov-richtext-addfmt/sub' }
                    ) );
                },
                isActive: props.isActive,
            }
        );
    }

    wp.richText.registerFormatType(
        'urvanov-richtext-addfmt/sup', {
            title: 'Sup',
            tagName: 'sup',
            className: null,
            edit: SupButton
        }
    );

    wp.richText.registerFormatType(
        'urvanov-richtext-addfmt/sub', {
            title: 'Sub',
            tagName: 'sub',
            className: null,
            edit: SubButton
        }
    );


} )( window.wp );
