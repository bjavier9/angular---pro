let activar = (
  quien: string,
  momento?: string,
  objeto: string = "tortugas"
): string => {
  return `${quien} me llamo ${objeto} ${momento == null ? "" : momento}`;
};

console.log(activar("Juan", "batidora"));
