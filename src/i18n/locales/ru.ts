import type { LanguageMetadata, LanguageTranslation } from '../types';

export const ru: LanguageTranslation = {
    translation: {
        menu: {
            file: {
                file: 'Файл',
                new: 'Создать',
                open: 'Открыть',
                save: 'Сохранить',
                import: 'Импортировать базу данных',
                export_sql: 'Экспорт SQL',
                export_as: 'Экспортировать как',
                delete_diagram: 'Удалить диаграмму',
                exit: 'Выход',
            },
            edit: {
                edit: 'Изменение',
                undo: 'Отменить',
                redo: 'Вернуть',
                clear: 'Очистить',
            },
            view: {
                view: 'Вид',
                show_sidebar: 'Показать боковую панель',
                hide_sidebar: 'Скрыть боковую панель',
                hide_cardinality: 'Скрыть множественность связи',
                show_cardinality: 'Показать множественность связи',
                zoom_on_scroll: 'Увеличение при прокрутке',
                theme: 'Тема',
                show_dependencies: 'Показать зависимости',
                hide_dependencies: 'Скрыть зависимости',
                // TODO: Translate
                show_minimap: 'Show Mini Map',
                hide_minimap: 'Hide Mini Map',
            },
            // TODO: Translate
            backup: {
                backup: 'Backup',
                export_diagram: 'Export Diagram',
                restore_diagram: 'Restore Diagram',
            },
            help: {
                help: 'Помощь',
                docs_website: 'Документация',
                join_discord: 'Присоединиться к сообществу в Discord',
            },
        },

        delete_diagram_alert: {
            title: 'Удалить диаграмму',
            description:
                'Это действие нельзя отменить. Это навсегда удалит диаграмму.',
            cancel: 'Отменить',
            delete: 'Удалить',
        },

        clear_diagram_alert: {
            title: 'Очистить диаграмму',
            description:
                'Это действие нельзя отменить. Это навсегда удалит все данные в диаграмме.',
            cancel: 'Отменить',
            clear: 'Очистить',
        },

        reorder_diagram_alert: {
            title: 'Переупорядочить диаграмму',
            description:
                'Это действие переставит все таблицы на диаграмме. Хотите продолжить?',
            reorder: 'Изменить порядок',
            cancel: 'Отменить',
        },

        multiple_schemas_alert: {
            title: 'Множественные схемы',
            description:
                '{{schemasCount}} схем в этой диаграмме. В данный момент отображается: {{formattedSchemas}}.',
            dont_show_again: 'Больше не показывать',
            change_schema: 'Изменить',
            none: 'никто',
        },

        copy_to_clipboard_toast: {
            unsupported: {
                title: 'Ошибка копирования',
                description: 'Буфер обмена не поддерживается',
            },
            failed: {
                title: 'Ошибка копирования',
                description:
                    'Что-то пошло не так. Пожалуйста, попробуйте еще раз.',
            },
        },

        theme: {
            system: 'Системная',
            light: 'Светлая',
            dark: 'Темная',
        },

        zoom: {
            on: 'Включено',
            off: 'Выключено',
        },

        last_saved: 'Последнее сохранение',
        saved: 'Сохранено',
        loading_diagram: 'Загрузка диаграммы...',
        deselect_all: 'Отменить выбор всех',
        select_all: 'Выбрать все',
        clear: 'Очистить',
        show_more: 'Показать больше',
        show_less: 'Показать меньше',

        side_panel: {
            schema: 'Схема:',
            filter_by_schema: 'Фильтр по схеме',
            search_schema: 'Схема поиска...',
            no_schemas_found: 'Схемы не найдены.',
            view_all_options: 'Просмотреть все варианты...',
            tables_section: {
                tables: 'Таблицы',
                add_table: 'Добавить таблицу',
                filter: 'Фильтр',
                collapse: 'Свернуть все',
                // TODO: Translate
                clear: 'Clear Filter',
                no_results: 'No tables found matching your filter.',
                // TODO: Translate
                show_list: 'Show Table List',
                show_dbml: 'Show DBML Editor',

                table: {
                    fields: 'Поля',
                    nullable: 'Может содержать NULL?',
                    primary_key: 'Первичный ключ,',
                    indexes: 'Индексы',
                    comments: 'Комментарии',
                    no_comments: 'Нет комментария',
                    add_field: 'Добавить поле',
                    add_index: 'Добавить индекс',
                    index_select_fields: 'Выберите поля',
                    no_types_found: 'Типы не найдены',
                    field_name: 'Имя',
                    field_type: 'Тип',
                    field_actions: {
                        title: 'Атрибуты поля',
                        unique: 'Уникальный',
                        comments: 'Комментарии',
                        no_comments: 'Нет комментария',
                        delete_field: 'Удалить поле',
                        // TODO: Translate
                        character_length: 'Max Length',
                    },
                    index_actions: {
                        title: 'Атрибуты индекса',
                        name: 'Имя',
                        unique: 'Уникальный',
                        delete_index: 'Удалить индекс',
                    },
                    table_actions: {
                        title: 'Действия',
                        change_schema: 'Изменить схему',
                        add_field: 'Добавить поле',
                        add_index: 'Добавить индекс',
                        duplicate_table: 'Duplicate Table', // TODO: Translate
                        delete_table: 'Удалить таблицу',
                    },
                },
                empty_state: {
                    title: 'Нет таблиц',
                    description: 'Создайте таблицу, чтобы начать',
                },
            },
            relationships_section: {
                relationships: 'Отношения',
                filter: 'Фильтр',
                add_relationship: 'Добавить отношение',
                collapse: 'Свернуть все',
                relationship: {
                    primary: 'Основная таблица',
                    foreign: 'Справочная таблица',
                    cardinality: 'Тип множественности связи',
                    delete_relationship: 'Удалить',
                    relationship_actions: {
                        title: 'Действия',
                        delete_relationship: 'Удалить',
                    },
                },
                empty_state: {
                    title: 'Нет отношений',
                    description: 'Создайте связь для соединения таблиц',
                },
            },
            dependencies_section: {
                dependencies: 'Зависимости',
                filter: 'Фильтр',
                collapse: 'Свернуть все',
                dependency: {
                    table: 'Стол',
                    dependent_table: 'Зависимый вид',
                    delete_dependency: 'Удалить',
                    dependency_actions: {
                        title: 'Действия',
                        delete_dependency: 'Удалить',
                    },
                },
                empty_state: {
                    title: 'Нет зависимостей',
                    description: 'Создайте представление, чтобы начать',
                },
            },

            // TODO: Translate
            areas_section: {
                areas: 'Areas',
                add_area: 'Add Area',
                filter: 'Filter',
                clear: 'Clear Filter',
                no_results: 'No areas found matching your filter.',

                area: {
                    area_actions: {
                        title: 'Area Actions',
                        edit_name: 'Edit Name',
                        delete_area: 'Delete Area',
                    },
                },
                empty_state: {
                    title: 'No areas',
                    description: 'Create an area to get started',
                },
            },
        },

        toolbar: {
            zoom_in: 'Увеличить масштаб',
            zoom_out: 'Уменьшить масштаб',
            save: 'Сохранить',
            show_all: 'Показать все',
            undo: 'Отменить',
            redo: 'Вернуть',
            reorder_diagram: 'Переупорядочить диаграмму',
            highlight_overlapping_tables: 'Выделение перекрывающихся таблиц',
        },

        new_diagram_dialog: {
            database_selection: {
                title: 'Какова ваша база данных?',
                description:
                    'Каждая база данных имеет свои уникальные функции и возможности.',
                check_examples_long: 'Открыть примеры',
                check_examples_short: 'Примеры',
            },

            import_database: {
                title: 'Импортируйте свою базу данных',
                database_edition: 'Версия базы данных:',
                step_1: 'Запустите этот скрипт в своей базе данных:',
                step_2: 'Вставьте вывод скрипта сюда:',
                script_results_placeholder: 'Вывод скрипта здесь...',
                ssms_instructions: {
                    button_text: 'SSMS Инструкции',
                    title: 'Инструкции',
                    step_1: 'Откройте в меню пункты Инструменты > Параметры > Результаты запроса > SQL Сервер.',
                    step_2: 'Если вы используете "Результат в сетке," измените Максимальное количество извлекаемых символов для данных, отличных от XML (установите на 9999999).',
                },
                instructions_link: 'Нужна помощь? Посмотрите, как',
                check_script_result: 'Проверить результат выполнения скрипта',
            },

            cancel: 'Отменить',
            back: 'Назад',
            import_from_file: 'Импортировать из файла',
            empty_diagram: 'Пустая диаграмма',
            continue: 'Продолжить',
            import: 'Импорт',
        },

        open_diagram_dialog: {
            title: 'Открыть диаграмму',
            description:
                'Выберите диаграмму, которую нужно открыть, из списка ниже.',
            table_columns: {
                name: 'Имя',
                created_at: 'Создано в',
                last_modified: 'Последнее изменение',
                tables_count: 'Таблицы',
            },
            cancel: 'Отмена',
            open: 'Открыть',
        },

        export_sql_dialog: {
            title: 'Экспорт SQL',
            description:
                'Экспортируйте схему диаграммы в {{databaseType}} скрипт',
            close: 'Закрыть',
            loading: {
                text: 'ИИ генерирует SQL для {{databaseType}}...',
                description: 'Это должно занять до 30 секунд.',
            },
            error: {
                message:
                    'Ошибка создания скрипта SQL. Попробуйте еще раз позже или <0>свяжитесь с нами</0>.',
                description:
                    'Не стесняйтесь использовать ваш OPENAI_TOKEN, см. руководство <0>здесь</0>.',
            },
        },

        create_relationship_dialog: {
            title: 'Создать отношениe',
            primary_table: 'Основная таблица',
            primary_field: 'Основное поле',
            referenced_table: 'Ссылается на таблицу',
            referenced_field: 'Ссылается на поле',
            primary_table_placeholder: 'Выберите таблицу',
            primary_field_placeholder: 'Выберите поле',
            referenced_table_placeholder: 'Выберите таблицу',
            referenced_field_placeholder: 'Выберите поле',
            no_tables_found: 'Таблицы не найдены',
            no_fields_found: 'Поля не найдены',
            create: 'Создать',
            cancel: 'Отменить',
        },

        import_database_dialog: {
            title: 'Импорт в текущую диаграмму',
            override_alert: {
                title: 'Импортировать базу данных',
                content: {
                    alert: 'Импорт этой диаграммы повлияет на существующие таблицы и связи.',
                    new_tables:
                        '<bold>{{newTablesNumber}}</bold> будут добавлены новые таблицы.',
                    new_relationships:
                        '<bold>{{newRelationshipsNumber}}</bold> будут созданы новые отношения.',
                    tables_override:
                        '<bold>{{tablesOverrideNumber}}</bold> таблицы будут перезаписаны.',
                    proceed: 'Хотите продолжить?',
                },
                import: 'Импорт',
                cancel: 'Отмена',
            },
        },

        export_image_dialog: {
            title: 'Экспортировать изображение',
            description: 'Выберите детализацию изображения при экспорте:',
            scale_1x: '1x Обычный',
            scale_2x: '2x (Рекомендовано)',
            scale_3x: '3x',
            scale_4x: '4x',
            cancel: 'Отменить',
            export: 'Экспортировать',
        },

        new_table_schema_dialog: {
            title: 'Выбрать схему',
            description:
                'В настоящее время отображается несколько схем. Выберите одну для новой таблицы.',
            cancel: 'Отменить',
            confirm: 'Подтвердить',
        },

        update_table_schema_dialog: {
            title: 'Изменить схему',
            description: 'Обновить таблицу "{{tableName}}" схема',
            cancel: 'Отменить',
            confirm: 'Изменить',
        },

        star_us_dialog: {
            title: 'Помогите нам стать лучше!',
            description:
                'Хотите отметить нас на GitHub? Это всего лишь один клик!',
            close: 'Не сейчас',
            confirm: 'Конечно!',
        },
        export_diagram_dialog: {
            title: 'Экспорт кода диаграммы',
            description: 'Выберите формат экспорта:',
            format_json: 'JSON',
            cancel: 'Отменить',
            export: 'Экспортировать',
            error: {
                title: 'Ошибка экспортирования диаграммы',
                description:
                    'Что-то пошло не так. Если вам нужна помощь, напишите нам: chartdb.io@gmail.com',
            },
        },
        import_diagram_dialog: {
            title: 'Импорт кода диаграммы',
            description: 'Вставьте JSON код диаграммы ниже:',
            cancel: 'Отменить',
            import: 'Импортировать',
            error: {
                title: 'Ошибка при импорте диаграммы',
                description:
                    'Код JSON диаграммы некорректен. Проверьте, пожалуйста, код и попробуйте снова. Проблема не решается? Напишите нам: chartdb.io@gmail.com',
            },
        },
        // TODO: Translate
        import_dbml_dialog: {
            example_title: 'Import Example DBML',
            title: 'Import DBML',
            description: 'Import a database schema from DBML format.',
            import: 'Import',
            cancel: 'Cancel',
            skip_and_empty: 'Skip & Empty',
            show_example: 'Show Example',
            error: {
                title: 'Error',
                description: 'Failed to parse DBML. Please check the syntax.',
            },
        },
        relationship_type: {
            one_to_one: 'Один к одному',
            one_to_many: 'Один ко многим',
            many_to_one: 'Многие к одному',
            many_to_many: 'Многие ко многим',
        },

        canvas_context_menu: {
            new_table: 'Создать таблицу',
            new_relationship: 'Создать отношение',
            // TODO: Translate
            new_area: 'New Area',
        },

        table_node_context_menu: {
            edit_table: 'Изменить таблицу',
            duplicate_table: 'Duplicate Table', // TODO: Translate
            delete_table: 'Удалить таблицу',
            add_relationship: 'Add Relationship', // TODO: Translate
        },

        copy_to_clipboard: 'Скопировать в буфер обмена',
        copied: 'Скопировано!',
        snap_to_grid_tooltip: 'Выравнивание по сетке (Удерживайте {{key}})',
        tool_tips: {
            double_click_to_edit: 'Кликните дважды, чтобы изменить',
        },

        language_select: {
            change_language: 'Сменить язык',
        },
    },
};

export const ruMetadata: LanguageMetadata = {
    name: 'Russian',
    nativeName: 'Русский',
    code: 'ru',
};
