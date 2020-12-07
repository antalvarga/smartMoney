
const CategorySchema = {
    name: 'Category'
    , primarykey: 'id'
    , properties: {
        id: 'string'
        , name: 'string'
        , color: {type: 'string', default: '#fff'}
        // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 1 - 24:12
        , isInit: {type: 'bool', default: false}
        , isDefault: {type: 'bool', default: false}
        , isCredit: {type: 'bool', default: false}
        , isDebit: {type: 'bool', default: false}
        //, order: {type: 'init', default: 0}
        , order: {type: 'int', default: 0}
        , entries: 'Entry[]'
    }
    ,
};

export default CategorySchema;
