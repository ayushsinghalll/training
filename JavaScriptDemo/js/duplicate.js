    function unique(s)
    {
        let str = "";
        let len = s.length;
        for (let i = 0; i < len; i++)
    {
        let c = s[i];
        if (str.indexOf(c) < 0)
    {
        str += c;
    }
    }
        return str;
    }
    let s = "aadesnssmmwc";

    console.log(unique(s));
