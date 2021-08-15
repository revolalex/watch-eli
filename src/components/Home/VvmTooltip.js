import { Component } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class VvmTooltip extends Component {
    state = {}
    render() {
        return (
            <span>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Vendez Votre Montre</Tooltip>}>
                    <span className="d-inline-block" 
                    style={{ 
                        color:"var(--vert-color)",
                        fontWeight: "900"
                    }}
                    >
                        V.V.M
                    </span>
                </OverlayTrigger>

            </span>
        );
    }
}

export default VvmTooltip;