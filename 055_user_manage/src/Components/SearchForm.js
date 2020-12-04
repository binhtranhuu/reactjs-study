import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textForm: ''
        }
    }
    hienThiNut = () => {
        if(this.props.hienThiForm === true) {
            return (
                <button onClick={() => this.props.Connect()} type="button" className="btn btn-outline-secondary mr-1">Đóng</button>
            )
        } else {
            return (
                <button onClick={() => this.props.Connect()} type="button" className="btn btn-outline-success">Thêm mới</button>
            )
        }
    }

    isChange = (event) => {
        this.setState({
            textForm: (event.target.value)
        });
        this.props.checkConnection(this.state.textForm);
    }
    
    render() {
        return (
            <div className="row my-3">
                <div className="col-md-6">
                    <div className="input-group">
                        <input onChange={(event) => this.isChange(event)} name="fSearch" type="text" className="form-control" placeholder="Nhập từ khóa ..." />
                        <div className="input-group-append">
                            <button onClick={(dl) => this.props.checkConnection(this.state.textForm)} type="submit" className="btn btn-primary">Tìm kiếm</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    {
                        this.hienThiNut()
                    }
                  </div>
                  
            </div>
        );
    }
}

export default SearchForm;