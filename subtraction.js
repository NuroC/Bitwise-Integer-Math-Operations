const BYTE_MASK = 0xff;

function subtract(x, y) {
    let byte0_x = x & BYTE_MASK;
    let byte1_x = (x >> 8) & BYTE_MASK;
    let byte2_x = (x >> 16) & BYTE_MASK;
    let byte3_x = (x >> 24) & BYTE_MASK;

    let byte0_y = y & BYTE_MASK;
    let byte1_y = (y >> 8) & BYTE_MASK;
    let byte2_y = (y >> 16) & BYTE_MASK;
    let byte3_y = (y >> 24) & BYTE_MASK;

    let borrow1 = (byte0_x < byte0_y);
    let borrow2 = (byte1_x < byte1_y + borrow1);
    let borrow3 = (byte2_x < byte2_y + borrow2);
   
    let byte0_sub = (byte0_x - byte0_y - borrow1) % 256;
    let byte1_sub = (byte1_x - byte1_y - borrow2) % 256;
    let byte2_sub = (byte2_x - byte2_y - borrow3) % 256;
    let byte3_sub = (byte3_x - byte3_y) % 256;

    let final_result = (byte3_sub << 24) + (byte2_sub << 16) + (byte1_sub << 8) + byte0_sub;
    return final_result;
}
