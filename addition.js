const BYTE_MASK = 0xff;

function safeBitwiseAdd(x, y) {
    let byte0_x = x & BYTE_MASK;
    let byte1_x = (x >> 8) & BYTE_MASK;
    let byte2_x = (x >> 16) & BYTE_MASK;
    let byte3_x = (x >> 24) & BYTE_MASK;

    let byte0_y = y & BYTE_MASK;
    let byte1_y = (y >> 8) & BYTE_MASK;
    let byte2_y = (y >> 16) & BYTE_MASK;
    let byte3_y = (y >> 24) & BYTE_MASK;

    let carry1 = (byte0_x + byte0_y) >= 256;
    let carry2 = ((byte1_x + byte1_y + carry1) >= 256);
    let carry3 = ((byte2_x + byte2_y + carry2) >= 256);

    let byte0_sum = (byte0_x + byte0_y) % 256;
    let byte1_sum = (byte1_x + byte1_y + carry1) % 256;
    let byte2_sum = (byte2_x + byte2_y + carry2) % 256;
    let byte3_sum = (byte3_x + byte3_y + carry3) % 256;

    let final_result = (byte3_sum << 24) + (byte2_sum << 16) + (byte1_sum << 8) + byte0_sum;
    return final_result;
}
