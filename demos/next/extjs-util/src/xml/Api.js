export const Xml = {
    Parser: (typeof DOMParser === 'undefined') ? null : DOMParser,
    
    Serializer: (typeof XMLSerializer === 'undefined') ? null : XMLSerializer,

    defaultRoot: (typeof document === 'undefined') ? null : document,

    parse (xmlString, mimeType = 'application/xml') {
        if (!xmlString) {
            return null;
        }

        let parser = new Xml.Parser();
        
        return parser.parseFromString(xmlString, mimeType);
    },

    parseHtml (html) {
        return Xml.parse(html, 'text/html');
    },
    
    stringify (doc) {
        let serializer = new Xml.Serializer();
        
        return serializer.serializeToString(doc);
    },

    // True if the browser supports the following syntax:
    // document.getElementsByTagName('namespacePrefix:tagName')
    get supportsColonNsSeparator () {
        let ret = Xml._supportsColonNsSeparator;
        let doc;
        
        if (ret === null) {
            doc = Xml.parse('<r><a:b xmlns:a="n"></a:b></r>');

            Xml._supportsColonNsSeparator = ret = !!doc.getElementsByTagName('a:b').length;
        }
        
        return ret;
    },
    
    _supportsColonNsSeparator: null
};
