import React, { useEffect, useState } from 'react'
import { Container, Grid, Paper, Typography } from '@mui/material'
import { connect } from 'react-redux'

import AddTractor from './AddTractor/AddTractor'
import Tractor from './Tractor/Tractor'
import { getTractors } from '../../actions/tractors'
import { styles } from './styles'

const Tractors = ({ getTractors, tractors, drivers }) => {
    const [selectedTractor, setSelectedTractor] = useState(null)
    useEffect(() => {
        getTractors()
    }, [getTractors])

    return (
        <Container>
            <Grid spacing={3} container>
                <Grid xs={12} md={selectedTractor ? 8 : 12} item>
                    <Paper sx={styles.paper} elevation={3}>
                        <Typography align="center" variant="h3">
                            Tractors
                        </Typography>
                        {!tractors ? (
                            <div>Loading</div>
                        ) : (
                            tractors.map((tractor) => {
                                return (
                                    <Tractor
                                        setSelectedTractor={setSelectedTractor}
                                        tractor={tractor}
                                        key={tractor._id}
                                    />
                                )
                            })
                        )}
                    </Paper>
                </Grid>

                {selectedTractor ? (
                    <Grid md={selectedTractor ? 4 : 12} item>
                        <Paper sx={styles.paper} elevation={3}>
                            <AddTractor
                                selectedTractor={selectedTractor}
                                setSelectedTractor={setSelectedTractor}
                                drivers={drivers}
                            />
                        </Paper>
                    </Grid>
                ) : (
                    ''
                )}
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return { tractors: state.tractors, drivers: state.drivers }
}

export default connect(mapStateToProps, { getTractors })(Tractors)
