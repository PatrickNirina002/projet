import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td className="li">
            {this.props.obj.matricule}
          </td>
          <td className="li">
            {this.props.obj.nom_pro}
          </td>
          <td className="li">
            {this.props.obj.type_rep}
          </td>
          <td className="li">
            {this.props.obj.prix}
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-danger">X</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;