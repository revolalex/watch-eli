import { Component } from "react";
import './TradeStep.css'

class TradeStep extends Component {
    state = {}
    render() {
        return (
            <div id="px-how" className="panel_ panel-present fill-sidekick owl-compact">
                <div className="container">
                    <div className="panel_head">
                        <h3>Comment prenons-nous en charge votre montre?</h3>
                    </div>
                    <div className="owl-carousel owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                            <div className="owl-stage"
                                style={{ transform: "translate3d(0px, 0px, 0px)", transition: "all 0s ease 0s", width: "960px" }}>
                                <div className="owl-item active" style={{width:"240px"}}>
                                    <div className="steps_item">
                                        <div className="item_media">
                                            <picture>
                                                <img srcset="https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_form-2015-03-10-04-49-19-383.png;quality=90;w=103, https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_form-2015-03-10-04-49-19-383.png;quality=55;w=206 2x" alt="echange" />
                                            </picture>
                                        </div>
                                        <h4 className="item_title">
                                            Remplissez le formulaire
                                        </h4>
                                        <p>Vous pouvez selectionner d’abord la montre pour laquelle vous souhaitez échanger la votre, ou commencer par renseigner les détails de votre montre actuelle. </p>
                                    </div>
                                </div>
                                <div className="owl-item active" style={{width:"240px"}}>
                                    <div className="steps_item">
                                        <div className="item_media">
                                            <picture>
                                                <img srcset="https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_collection-2021-01-15-03-34-37-988.png;quality=90;w=100, https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_collection-2021-01-15-03-34-37-988.png;quality=55;w=200 2x" alt="echange" />
                                            </picture>
                                        </div>
                                        <h4 className="item_title">
                                            Collecte gratuite à domicile
                                        </h4>
                                        <p>Vous obtiendrez une estimation pour votre montre. Si celle-ci vous convient, nous récupérerons votre montre gratuitement à votre convenance. Nous vous enverrons même l'emballage.</p>
                                    </div>
                                </div>
                                <div className="owl-item active" style={{width:"240px"}}>
                                    <div className="steps_item">
                                        <div className="item_media">
                                            <picture>
                                                <img srcset="https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_inspect-2015-03-10-04-49-24-084.png;quality=90;w=99, https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_inspect-2015-03-10-04-49-24-084.png;quality=55;w=198 2x" alt="echange" />
                                            </picture>
                                        </div>
                                        <h4 className="item_title">
                                            Inspection de la montre
                                        </h4>
                                        <p>Lorsque nous recevrons la montre que vous souhaitiez échanger, nous l’inspecterons dans notre centre agrée par les fabricants</p>
                                    </div>
                                </div>
                                <div className="owl-item active" style={{width:"240px"}}>
                                    <div className="steps_item">
                                        <div className="item_media">
                                            <picture>
                                                <img srcset="https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_payment-2021-01-15-03-34-37-809.png;quality=90;w=100, https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_payment-2021-01-15-03-34-37-809.png;quality=55;w=200 2x" alt="echange" />
                                            </picture>
                                        </div>
                                        <h4 className="item_title">
                                            Montre envoyée
                                        </h4>
                                        <p>Nous vous ferons une offre finale pour votre échange. Si vous êtes d’accord, votre nouvelle montre vous sera envoyée.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-nav disabled">
                            <div className="owl-prev disabled">
                                <div className="icon icon-arrow-left">
                                </div>
                            </div>
                            <div className="owl-next disabled">
                                <div className="icon icon-arrow-right">
                                </div>
                            </div>
                        </div>
                        <div className="owl-dots disabled">
                        </div>
                    </div>

                    <p className="txt-faqs">Vous ne trouvez pas de réponse à votre question? Pensez à regarder dans <a href="#px-faqs" className="underline" data-scroll="">notre FAQ</a>.</p>

                </div>
            </div>
        );
    }
}

export default TradeStep;