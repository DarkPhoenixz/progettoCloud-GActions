<div class="card">
    <div class="title">Revisione Documento X</div>
    <div class="bottom">
        <div class="endTime">
            <div id="endTimeIcon">
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="black"/>
                    <path d="M13 7H11V12.414L14.293 15.707L15.707 14.293L13 11.586V7Z" fill="black"/>
                </svg>
            </div>
            <div id="endTimeDate">17 Mag</div>
        </div>
        <div class="followers">
            <div class="follower">
                <div id="picture1"></div>
            </div>
            <div class="follower">
                <div id="picture2"></div>
            </div>
    </div>
    </div>
    
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap');
    *{
        font-family: 'Montserrat';
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    
    .card{
        width: 90%;
        height: 70%;
        background-color: #e7e7e7;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        overflow: hidden;
        padding-top: 8px;
    }

    .title{
        font-size: 2vh;
        font-weight: bold;
        
    }

    .bottom{
        width: 100%;
        height: 30px;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 8px;
        padding-top: 4px;
    
    }

    .endTime{
        font-size: 12px;
        width: 150px;
        height: 95%;
        
        display: flex;
    }

    #endTimeIcon{
        width: 20px;
        height: 20px;
    }
    
    #endTimeDate{
        width: 60%;
        height: 100%;
        font-weight: bold;
        text-align: center;
        line-height: 22px;
        font-size: 12px;
    }

    .followers{
        width: 100%;
        height: 100%;
        
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .follower{
        width: 25px;
        height: 25px;
        border: 1px solid white;
        border-radius: 100%;
        margin-right: 5px;
        margin-bottom: 5px;
        overflow: hidden;
    }

    #picture1{
        width: 100%;
        height: 100%;
        background-image: url("../../../img/proPic.png");
        background-size: cover;
    }
    #picture2{
        width: 100%;
        height: 100%;
        background-image: url("../../../img/proPic2.png");
        background-size: cover;
    }
</style>
