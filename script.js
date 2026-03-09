// write js code here if required
function maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;

    while (left < right) {
        // Calculate width and height
        const width = right - left;
        const height = Math.min(heights[left], heights[right]);

        // Calculate area
        const area = width * height;

        // Update maxArea if needed
        maxArea = Math.max(maxArea, area);

        // Move the pointer for the shorter line
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}