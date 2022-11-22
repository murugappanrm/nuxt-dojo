export default defineEventHandler(async function (event) {
  // const { name } = useQuery(event);

  // const { age } = await useBody(event);

  /* API call with private key */

  // const { data } = await $fetch(
  //   `https://api.currencyapi.com/v3/latest?apikey=u8pkV9pSQIJmxxQyM15lyo4OdtvHVgvdS5SfnUGe`
  // );

  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=u8pkV9pSQIJmxxQyM15lyo4OdtvHVgvdS5SfnUGe&base_currency=USD&currencies=MYR`
  );

  return data;
});
