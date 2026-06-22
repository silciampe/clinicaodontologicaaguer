export function getWhatsAppDigits(number: string) {
  return number.replace(/\D/g, "");
}

export function getWhatsAppHref(
  number: string,
  message = "Hola, me comunico desde la web de Clínica Dental Aguer. Quisiera realizar una consulta.",
) {
  const digits = getWhatsAppDigits(number);
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function getTelHref(number: string) {
  const digits = getWhatsAppDigits(number);
  return `tel:+${digits}`;
}
