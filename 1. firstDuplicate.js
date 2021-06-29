function firstDuplicate(a) {
    let st = new Set();
    for (let i = 0; i < a.length; i++){
        if (st.has(a[i])) return a[i];
        st.add(a[i]);
    }
    return -1;
}