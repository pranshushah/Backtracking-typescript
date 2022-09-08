function validateIp(octet: string) {
  const ipNumber = parseInt(octet);
  if (octet.length > 3) {
    return false;
  }
  if (ipNumber < 0 || ipNumber > 255) {
    return false;
  }
  // octet should not start with 0;
  if (octet.length > 1 && octet[0] === '0') {
    return false;
  }
  return true;
}
function ipAddressGenerator(
  remainingIp: string,
  remainingOctet: number,
  createdIpAddressSofar: string,
  result: string[],
) {
  //we don't have any remaining numbers and all of our octet are used so createdIpAddressSofar is correct ip address
  if (remainingIp === '' && remainingOctet === 0) {
    result.push(createdIpAddressSofar);
    return;
  }
  //after creating 4 octet we still have some numbers left so this is not correct ip.
  if (remainingIp !== '' && remainingOctet === 0) {
    return;
  }
  // length of each octet can be 1,2 or 3
  if (remainingIp.length >= 1) {
    const length1 = remainingIp.slice(0, 1);
    if (validateIp(length1)) {
      ipAddressGenerator(
        remainingIp.slice(1),
        remainingOctet - 1,
        remainingOctet !== 1
          ? createdIpAddressSofar + length1 + '.'
          : createdIpAddressSofar + length1,
        result,
      );
    }
  }
  if (remainingIp.length >= 2) {
    const length2 = remainingIp.slice(0, 2);
    if (validateIp(length2)) {
      ipAddressGenerator(
        remainingIp.slice(2),
        remainingOctet - 1,
        remainingOctet !== 1
          ? createdIpAddressSofar + length2 + '.'
          : createdIpAddressSofar + length2,
        result,
      );
    }
  }
  if (remainingIp.length >= 3) {
    const length3 = remainingIp.slice(0, 3);
    if (validateIp(length3)) {
      ipAddressGenerator(
        remainingIp.slice(3),
        remainingOctet - 1,
        remainingOctet !== 1
          ? createdIpAddressSofar + length3 + '.'
          : createdIpAddressSofar + length3,
        result,
      );
    }
  }
}
function createAllIpAddress(ip: string) {
  if (ip.length > 12 || ip.length < 4) {
    return [];
  }
  const result: string[] = [];
  ipAddressGenerator(ip, 4, '', result);
  return result;
}

console.log(createAllIpAddress('25525511135'));
