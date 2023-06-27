import { ReactSearchAutocomplete } from 'react-search-autocomplete'
export default function Searchbar() {

  
      const products=[
        {
            image:"./image/s1.jpg",
        productname:"Capsicum Green - Desi Vegetable Seeds",
        oldprice:"300",
        newprice:"299",
        description:"loream description .."
        },
        {
            image:"./image/s2.jpg",
        productname:"Crunchy Cucumber Vegetable Seeds",
        oldprice:"200",
        newprice:"180",
        description:"loream description .."
        },
        {
            image:"./image/s3.jpg",
        productname:"Best Brinjal Vegetable Seeds",
        oldprice:"500",
        newprice:"489",
        description:"loream description .."
        },
        {
            image:"./image/s4.jpg",
        productname:"Snake Gourd Chichinda - Vegetable Seeds",
        oldprice:"400",
        newprice:"389",
        description:"loream description .."
        },
        ];
      
      const handleOnSearch = (string, results) => {
        console.log(string, results);
      };
    
      const handleOnHover = (result) => {
        console.log(result);
      };
    
      const handleOnSelect = (item) => {
        console.log(item);
      };
    
      const handleOnFocus = () => {
        console.log("Focused");
      };
    
      const handleOnClear = () => {
        console.log("Cleared");
      };
    
    return (
        <>
            {/* <div className="bottom-menu">
                <div className="left-container"> */}
{/* <div className="logo-container">
<img src="https://static.freshtohome.com/images/logo/2021/logo-medium.png" style={{ width:"100%" }} alt="" />
</div> */}
                    {/* <div className="searchbox-container"> */}
                    {/* <i aria-hidden="true" className="fa fa-search search-icon serchicon"></i> */}
                        {/* <input type="text" className="search-box" placeholder="Type product name to search" /> */}
                     {/* start  */}
                     {/* <div style={{ width: 200, margin: 20 }}> */}
          {/* <h2>My custom searchbox!</h2>
          <div style={{ marginBottom: 20 }}>Try to type "Titanic"</div> */}
          <ReactSearchAutocomplete
            items={products}
            fuseOptions={{ keys: ["productname"] }} // Search on both fields
            resultStringKeyName="productname" // String to display in the results
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            styling={{
                paddingLeft: "33px",
                width: "100%",
                color: "#666",
                height: "45px",
                lineHeight: "20px",
                borderRadius: "8px",
                fontSize: "13px",
                outline: "none",
                border: "1px solid #ccc",
                zIndex: 3,
            }}
            autoFocus
            placeholder="Type product name to search "
          />
        </>
    )
}

