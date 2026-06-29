export function getWhatsAppDigits(number: string) {
  const digits = number.replace(/\D/g, "");
  if (digits.startsWith("54")) return digits;
  return `549${digits}`;
}

export function getWhatsAppHref(
  number: string,
  message = "Hola, me comunico desde la web de Clínica Dental Aguer. Quisiera realizar una consulta.",
) {
  const digits = getWhatsAppDigits(number);
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function getTelHref(number: string) {
  const digits = number.replace(/\D/g, "");
  if (digits.startsWith("54")) return `tel:+${digits}`;
  return `tel:+54${digits}`;
}
