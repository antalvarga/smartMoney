const EntrySchema = {
    name: 'Entry'
    , primarykey: 'id'
    , properties: {
        id: 'string'
        , amount: 'double'
        , description: 'string?'
        , entryAt: 'date'
        , latitude: 'float?'
        , longitude: 'float?'
        , address: 'string?'
        , photo: 'string?'
        , isInit: 'bool'
        // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 16:08
        // , category: 'Category?'
        , category: 'Category'
    }
    ,
};

export default EntrySchema;