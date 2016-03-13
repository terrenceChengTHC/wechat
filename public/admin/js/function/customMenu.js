jQuery(function ($) {
    var grid_selector = "#grid-table";
    var pager_selector = "#grid-pager";

    //resize to fit page size
    $(window).on('resize.jqGrid', function () {
        $(grid_selector).jqGrid('setGridWidth', $(".page-content").width());
        $(grid_selector).jqGrid('setGridHeight', 350);
    })
    //resize on sidebar collapse/expand
    var parent_column = $(grid_selector).closest('[class*="col-"]');
    $(document).on('settings.ace.jqGrid', function (ev, event_name, collapsed) {
        if (event_name === 'sidebar_collapsed' || event_name === 'main_container_fixed') {
            //setTimeout is for webkit only to give time for DOM changes and then redraw!!!
            setTimeout(function () {
                $(grid_selector).jqGrid('setGridWidth', parent_column.width());
            }, 0);
        }
    })

    var grid_data =
        [
            {
                id: "1",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            },
            {
                id: "2",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            },
            {
                id: "3",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            },
            {
                id: "4",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            },
            {
                id: "5",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            },
            {
                id: "6",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            },
            {
                id: "7",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            },
            {
                id: "8",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            },
            {
                id: "9",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            },
            {
                id: "10",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            },
            {
                id: "11",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            },
            {
                id: "12",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            },
            {
                id: "13",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            }
        ];
    var subgrid_data =
        [
            {
                id: "1",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            },
            {
                id: "2",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            },
            {
                id: "3",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            },
            {
                id: "4",
                name: "Desktop Computer",
                type: "click",
                key: "Yes",
                url: "click",
                media_id: "2007-12-03",
                enable: 'true'
            }
        ];

    function beforeDeleteCallback(e) {
        var form = $(e[0]);
        if (form.data('styled')) return false;

        form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
        style_delete_form(form);

        form.data('styled', true);
    }

    //it causes some flicker when reloading or navigating grid
    //it may be possible to have some custom formatter to do this as the grid is being created to prevent this
    //or go back to default browser checkbox styles for the grid
    function styleCheckbox(table) {
        /**
         $(table).find('input:checkbox').addClass('ace')
         .wrap('<label />')
         .after('<span class="lbl align-top" />')


         $('.ui-jqgrid-labels th[id*="_cb"]:first-child')
         .find('input.cbox[type=checkbox]').addClass('ace')
         .wrap('<label />').after('<span class="lbl align-top" />');
         */
    }


    //unlike navButtons icons, action icons in rows seem to be hard-coded
    //you can change them like this in here if you want
    function updateActionIcons(table) {
        /**
         var replacement =
         {
             'ui-ace-icon fa fa-pencil' : 'ace-icon fa fa-pencil blue',
             'ui-ace-icon fa fa-trash-o' : 'ace-icon fa fa-trash-o red',
             'ui-icon-disk' : 'ace-icon fa fa-check green',
             'ui-icon-cancel' : 'ace-icon fa fa-times red'
         };
         $(table).find('.ui-pg-div span.ui-icon').each(function(){
						var icon = $(this);
						var $class = $.trim(icon.attr('class').replace('ui-icon', ''));
						if($class in replacement) icon.attr('class', 'ui-icon '+replacement[$class]);
					})
         */
    }

    //replace icons with FontAwesome icons like above
    function updatePagerIcons(table) {
        var replacement =
        {
            'ui-icon-seek-first': 'ace-icon fa fa-angle-double-left bigger-140',
            'ui-icon-seek-prev': 'ace-icon fa fa-angle-left bigger-140',
            'ui-icon-seek-next': 'ace-icon fa fa-angle-right bigger-140',
            'ui-icon-seek-end': 'ace-icon fa fa-angle-double-right bigger-140'
        };
        $('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function () {
            var icon = $(this);
            var $class = $.trim(icon.attr('class').replace('ui-icon', ''));

            if ($class in replacement) icon.attr('class', 'ui-icon ' + replacement[$class]);
        })
    }

    function enableTooltips(table) {
        $('.navtable .ui-pg-button').tooltip({container: 'body'});
        $(table).find('.ui-pg-div').tooltip({container: 'body'});
    }

    //var selr = jQuery(grid_selector).jqGrid('getGridParam','selrow');

    $(document).one('ajaxloadstart.page', function (e) {
        $(grid_selector).jqGrid('GridUnload');
        $('.ui-jqdialog').remove();
    });

    $("#grid-table").jqGrid({
        //subgrid options
        subGrid: true,
        //subGridModel: [{ name : ['No','Item Name','Qty'], width : [55,200,80] }],
        //datatype: "xml",
        subGridOptions: {
            plusicon: "ace-icon fa fa-plus center bigger-110 blue",
            minusicon: "ace-icon fa fa-minus center bigger-110 blue",
            openicon: "ace-icon fa fa-chevron-right center orange"
        },
        //for this example we are using local data
        subGridRowExpanded: function (subgridDivId, rowId) {
            var subgridTableId = subgridDivId + "_t";
            $("#" + subgridDivId).html("<table id='" + subgridTableId + "'></table>");
            $("#" + subgridTableId).jqGrid({
                datatype: 'local',
                data: subgrid_data,
                colNames: [' ', 'ID', '菜单标题', '响应动作类型', '推送文章', '跳转连接', '媒体相关', '是否启用'],
                colModel: [
                    {
                        name: 'myac', index: '', width: 80, fixed: true, sortable: false, resize: false,
                        formatter: 'actions',
                        formatoptions: {
                            keys: true,
                            //delbutton: false,//disable delete button
                            delOptions: {recreateForm: true, beforeShowForm: beforeDeleteCallback},
                            //editformbutton:true, editOptions:{recreateForm: true, beforeShowForm:beforeEditCallback}
                        }
                    },
                    {name: 'id', index: 'id', width: 40, sorttype: "int", editable: true},
                    {
                        name: 'name',
                        index: 'name',
                        width: 150,
                        editable: true,
                        editoptions: {size: "20", maxlength: "30"}
                    },
                    {
                        name: 'type',
                        index: 'type',
                        width: 90,
                        editable: true,
                        edittype: "select",
                        editoptions: {value: "click:点击推事件;view:跳转URL;scancode_push:扫码推事件;location_select:地理位置"}
                    },
                    {name: 'key', index: 'key', width: 60, sorttype: "String", editable: true},
                    {name: 'url', index: 'url', width: 60, sorttype: "String", editable: true},
                    {name: 'media_id', index: 'media_id', width: 60, sorttype: "String", editable: true},
                    {
                        name: 'enable',
                        index: 'enable',
                        width: 70,
                        editable: true,
                        edittype: "checkbox",
                        editoptions: {value: "true:false"},
                        //unformat: aceSwitch
                    }
                ]
            });
        },
        data: grid_data,
        datatype: "local",
        height: 250,
        colNames: [' ', 'ID', '菜单标题', '响应动作类型', '推送文章', '跳转连接', '媒体相关', '是否启用'],
        colModel: [
            {
                name: 'myac', index: '', width: 80, fixed: true, sortable: false, resize: false,
                formatter: 'actions',
                formatoptions: {
                    keys: true,
                    //delbutton: false,//disable delete button
                    delOptions: {recreateForm: true, beforeShowForm: beforeDeleteCallback},
                    //editformbutton:true, editOptions:{recreateForm: true, beforeShowForm:beforeEditCallback}
                }
            },
            {name: 'id', index: 'id', width: 20, sorttype: "int", editable: true},
            {name: 'name', index: 'name', width: 150, editable: true, editoptions: {size: "20", maxlength: "30"}},
            {
                name: 'type',
                index: 'type',
                width: 90,
                editable: true,
                edittype: "select",
                editoptions: {value: "click:点击推事件;view:跳转URL;scancode_push:扫码推事件;location_select:地理位置"}
            },
            {name: 'key', index: 'key', width: 60, sorttype: "String", editable: true},
            {name: 'url', index: 'url', width: 60, sorttype: "String", editable: true},
            {name: 'media_id', index: 'media_id', width: 60, sorttype: "String", editable: true},
            {
                name: 'enable',
                index: 'enable',
                width: 70,
                editable: true,
                edittype: "checkbox",
                editoptions: {value: "true:false"},
                //unformat: aceSwitch
            }
        ],
        viewrecords: true,
        rowNum: 10,
        rowList: [10, 20, 30],
        pager: "#grid-pager",
        altRows: true,
        //toppager: true,
        multiselect: true,
        //multikey: "ctrlKey",
        multiboxonly: true,
        loadComplete: function () {
            var table = this;
            setTimeout(function () {
                styleCheckbox(table);
                updateActionIcons(table);
                updatePagerIcons(table);
                enableTooltips(table);
            }, 0);
        },
        editurl: "/dummy.html",//nothing is saved
        caption: "菜单编辑"
    });
    $(window).triggerHandler('resize.jqGrid');//trigger window resize to make the grid get the correct size

    //navButtons
    jQuery(grid_selector).jqGrid('navGrid', pager_selector,
        { 	//navbar options
            edit: false,
            del: false,
            search:false,
            add: true,
            addicon: 'ace-icon fa fa-plus-circle purple',
            refresh: true,
            refreshicon: 'ace-icon fa fa-refresh green',
        },
        {
            //new record form
            //width: 700,
            closeAfterAdd: true,
            recreateForm: true,
            viewPagerButtons: false,
            beforeShowForm: function (e) {
                var form = $(e[0]);
                form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar')
                    .wrapInner('<div class="widget-header" />')
                style_edit_form(form);
            }
        }
    ).navButtonAdd(pager_selector,{
        caption:"同步菜单到公众号",
        buttonicon:"ace-icon fa fa-cloud-upload grey",
        onClickButton: function(){
            alert("同步中...");
        },
        position:"last"
    })
});
