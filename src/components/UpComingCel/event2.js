import "./cele.css"
const Event2 = (props) => {
    const{labelname2,labelname3}=props;
    return (
<div className="row mb-5">
<div className="col-sm-1"></div>
<div className="col-sm-11 ">
<div className="dot">
      <i className="bi bi-three-dots dotsAlign"></i>
</div>
<div className="col-sm-10" style={{ display: 'grid' }}>
<label className="form-label "><b>{props.profname}</b><span>{labelname2}<b id="b2">{labelname3}</b></span></label>

</div>
<button type="button" id="btnView" className="btn "  onClick={() => window.open("")}>jion now</button>
</div>


</div>
    )
}
export default  Event2;