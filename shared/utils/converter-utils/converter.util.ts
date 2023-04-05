export function calculateConversion(
    amount: any,
    action: string,
    rate: any,
) {
    const value: any = toNumber(amount);

    if (!value || !isNumber(value)) {
        return '';
    }

    return formatPrice(
        (action === 'nep-to-busd' ? parseFloat(value) * rate : parseFloat(value) / rate),
    );
}

export function formatPrice(price: any) {
    return parseFloat(price).toFixed(2);
}

export function toNumber(value: any) {
    const number = parseFloat(`${value}`.replace(/[^0-9.]/g, ''));
    if (Number.isNaN(number)) {
        return 0;
    }
    return number;
}

const regex = /^[-+]?\d+(\.\d+)?$/;

export function isNumber(value: any) {
    return regex.test(value);
}