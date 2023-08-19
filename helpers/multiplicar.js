const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 1, listar, hasta = 10) => {

    try {

        let salida, consola = '';
    
        for (let i = 0; i <= hasta ; i++) {

            consola += ' ' + colors.brightBlue( base ) ;
            consola += ' x '.green + colors.brightBlue( i );
            consola += ' = ' + colors.yellow( base * i ) + '\n';

            // para crear el txt
            salida += `${ base } x ${ hasta } = ${ base * i }\n`;
        }

    
        if ( listar ) {

            console.log('============================='.green);
            console.log(` TABLA DE BASE: `.green + colors.brightBlue( base ) + ' HÁSTA: '.green + colors.brightBlue( hasta )  );
            console.log('=============================\n'.green);

            console.log( consola )
        };
    
        fs.writeFileSync( `tablas/base-${ base }-hasta-${ hasta }.txt`, salida )

        return  'CREATE ' + `tabla-${ base }.txt `;
        
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}