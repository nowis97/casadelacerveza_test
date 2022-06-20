const locale = process.env['NEXT_PUBLIC_LOCALE'] || 'es-CL'

export const useCurrency = () => {
    return new Intl.NumberFormat(locale , {style: 'currency', currency: 'CLP'}).format;
}

